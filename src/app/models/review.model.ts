export interface ReviewModel {
    id?: string,
    coffeeId: string,
    author: string,
    authorId: string,
    title: string,
    rating: number,
    description: string,
    edited: boolean
}