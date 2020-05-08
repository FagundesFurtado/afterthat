import { Controller } from '@nestjs/common';
import { SongService } from './song.service';
import { Crud } from '@nestjsx/crud';
import { Song } from './song.entity';

@Controller('song')
@Crud({
    model: {
        type: Song
    },
    routes: {
        exclude: ['replaceOneBase', "createManyBase"]
    }
})
export class SongController {
    constructor(private service: SongService) { }
}
