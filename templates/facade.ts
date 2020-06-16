import {FacadeTemplate} from "../generator/interfaces";

export default (f: FacadeTemplate): string => {

  const lowerCaseFirstChar = (name: string): string =>
    name.charAt(0).toLowerCase() + name.slice(1);

  const upperCaseFirstChar = (name: string): string =>
    name.charAt(0).toUpperCase() + name.slice(1);

  const padString = (doc: string, indent: number): string => {
    if (!doc) {
      return '';
    }
    const segments = doc.split('\n').map(segment =>
      segment.padStart(segment.length + indent));
    return segments.join('\n')
  }

  const generateAvailableList = (availableTo) =>
  padString(availableTo.map(env => upperCaseFirstChar(env.replace('-user', 's'))).join('\n'), 4);

  const generateInterface = (i) => {
    return `
interface ${i.name} {
${i.types.map(t => {
  let name: string = t.name;
  if (name.indexOf('-') !== -1) {
    name = `'${name}'`;
  }
return padString(`${name}: ${t.type};`, 2)
}).join('\n')}
}`
  }

  return `/**
  Juju ${f.name} version ${f.version}.
  This facade is available on:
${generateAvailableList(f.availableTo)}

  NOTE: This file was generated on ${new Date(Date.now()).toUTCString()} using
  the Juju schema from  Juju ${f.jujuVersion} at the git SHA ${f.jujuGitSHA}.
  Do not manually edit this file.
*/

import {autoBind, createAsyncHandler} from "../transform.js";
import wrappers from "../wrappers.js";
${f.interfaces.map(generateInterface).join('\n')}

/**
${padString(f.docBlock, 2)}
*/
export default class ${f.name}V${f.version} {
  version: number;

  constructor() {
    this.version = ${f.version};

    // Automatically bind all methods to instances.
    autoBind(this);
  }
  ${f.methods.map(m =>`
  /**
${padString(m.docBlock, 4)}
  */
  ${lowerCaseFirstChar(m.name)}(${m.params ? `params: ${m.params}` : ``}): Promise<${m.result}> {
    return new Promise((resolve, reject) => {

      const req = {
        type: '${f.name}',
        request: '${m.name}',
        version: '${f.version}',
      ${m.params ? `  params: params,
      };`:
`};`}

      let transform = null;

      transform = resp => {
        // Perform any transformations if necessary.
        return resp;
      };

      const handler = createAsyncHandler(resolve, reject, transform);
      this._transport.write(req, handler);
    });
  }
  `).join('')}
  if (wrappers.wrap${f.name}) {
    ${f.name}V${f.version} = wrappers.wrap${f.name}(${f.name}V${f.version});
  }
}
`;
}
