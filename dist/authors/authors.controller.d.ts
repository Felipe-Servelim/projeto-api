import { AuthorsService } from './authors.service';
import { Author } from './author.entity';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    findAll(): Author[];
    findOne(id: string): Author;
}
