interface ResponseType {
  [key: string]: any;
}

export class ResponseBuilder {
  private success: boolean;
  private data: any;
  private errors: number[];

  constructor(data: any = null) {
    this.data = data;
    this.success = true;
    this.errors = [];
    return this;
  }

  public err(errors = null) {
    this.success = false;
    this.errors = errors;
    return this;
  }

  public toJSON(): any {
    const res: ResponseType = {};

    for (const [key, value] of Object.entries(this)) {
      if (value !== undefined && value !== null) {
        res[key] = value;
      }
    }

    return res;
  }
}
