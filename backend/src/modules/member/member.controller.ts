import { Controller } from '@nestjs/common';
import { Member } from './member.entity';
import { Crud } from '@nestjsx/crud';

@Controller('member')
@Crud({
    model: {
        type: Member
    },
    routes: {
        exclude: ['replaceOneBase', "createManyBase", 'deleteOneBase']
    }
})
export class MemberController { }
