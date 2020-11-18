export default class ResourceNotFoundError extends Error {
  constructor(resource, id) {
    const resourceName = resource ? resource.modelName : 'Resource';
    const withId = id ? `with ID ${id} ` : '';
    super(`${resourceName} ${withId}is not found`);
    this.name = 'ResourceNotFoundError';
    this.statusCode = 400;
  }
}
