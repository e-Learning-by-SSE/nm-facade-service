import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { InternalService } from './internal.service';

import {
  ApiCreatedResponse,
  ApiFoundResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CompDto } from './dto/comp.dto';

@ApiTags('internals')
@Controller('internalss')
export class InternalsController {
  constructor(private readonly internalsService: InternalService) {}


  @Get()
  findAll() {
    return this.internalsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'The comp has been successfully found.',
    type: CompDto,
  })
  @ApiNotFoundResponse({
    description: "Couldn't find the comp",
  })
  findOne(@Param('id') id: string) {
    return this.internalsService.findOne(+id);
  }


}
