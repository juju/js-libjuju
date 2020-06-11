import {FacadeTemplate} from "../generator/interfaces";

export default (f: FacadeTemplate): string => {

  const lowerCaseFirstChar = (name: string): string =>
    name.charAt(0).toLowerCase() + name.slice(1);

  const padString = (doc: string, indent: number): string => {
    const segments = doc.split('\n').map(segment =>
      segment.padStart(segment.length + indent));
    return segments.join('\n')
  }

  const generateInterface = (method) => {
    if (method.params) {
      const type = (p) => `${p[0]}: ${p[1].type};`;
      return `
    interface ${method.name}Params {
${method.params.map(p => padString(type(p), 6)).join('\n')}
    }`
    }
    return '';
  }

  return `
  /**
    Juju ${f.name} version ${f.version}.
    ${f.availableOnControllers ? 'This API facade is available on controller connections.': ''}
    ${f.availableOnModels ? 'This API facade is available on model connections.': ''}

    NOTE: This file was generated on ${new Date(Date.now()).toUTCString()} using
    the Juju schema from  Juju ${f.jujuVersion} at the git SHA ${f.jujuGitSHA}.
    Do not manually edit this file.
  */

  import {autoBind, createAsyncHandler} from "../transform.js";
  import wrappers from "../wrappers.js";

  /**
${padString(f.docBlock, 4)}
  */
  export default class ${f.name}V${f.version} {
    version: number;

    constructor() {
      this.version = ${f.version};

      // Automatically bind all methods to instances.
      autoBind(this);
    }
    ${f.methods.map(m => `
${generateInterface(m)}

    /**
${padString(m.docBlock, 6)}
    */
    ${lowerCaseFirstChar(m.name)}(${m.params ? `params: ${m.name}Params, callback?`: 'callback?'}) {
      return new Promise((resolve, reject) => {

        const req = {
          type: '${f.name}',
          request: '${m.name}',
          version: '${f.version}',
          params: params
        };

        let transform = null;
        ${m.result ? `
        transform = resp => {
          let result;
          // XXX generate the result
          return result;
        };
        `: ``}
        const handler = createAsyncHandler(callback, resolve, reject, transform);
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
