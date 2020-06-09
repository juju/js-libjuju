// The schema doesn't currently contain what endpoint the facades are for
// so we have hard coded the facades that are only for a controller and for
// a model and controller. All other facades are for the model only.
const controllerOnlyFacades = [
  "AllModelWatcher",
  "ApplicationOffers",
  "Cloud",
  "Controller",
  "CrossController",
  "MigrationTarget",
  "ModelManager",
  "ModelSummaryWatcher",
  "UserManager",
];

const controllerAndModelFacades = [
  "Pinger",
  "Bundle",
  "NotifyWatcher",
  "ModelConfig",
];

export function isInController(name: string): boolean {
  return (
    controllerOnlyFacades.includes(name) ||
    controllerAndModelFacades.includes(name)
  );
}

export function isInModel(name: string): boolean {
  return !controllerOnlyFacades.includes(name);
}
