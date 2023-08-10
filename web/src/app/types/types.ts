export type Game = {
    id: string,
    attributes: {
      Title: string,
      Launch: string,
      Description: string,
      slug: string,
      createdAt: Date,
      updateAt: Date,
      publishedAt: Date,
      platforms: object[],
      cover: object[]
    }
  }
  export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  }
  
  export interface Meta {
    pagination?: Pagination;
  }
  
  