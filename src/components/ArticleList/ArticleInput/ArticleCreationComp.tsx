export default interface INewArticle {
    title: string,
    author: string,
    description: string,
    body: string,
    allMembers?: number,
    paidMembers?: number,  
    price?: number,
    category: string[],
    series: string[],
    tags: string[];

}