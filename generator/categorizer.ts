export function isInController(availableTo: string[]): boolean {
  return availableTo.includes("controller-user");
}

export function isInModel(availableTo: string[]): boolean {
  return availableTo.includes("model-user");
}
