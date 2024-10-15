import { Author } from './author.entity';
export declare class AuthorsService {
    private authors;
    findAll(): Author[];
    findOne(id: number): Author;
}
