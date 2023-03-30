
import { ApiProperty } from '@nestjs/swagger';
import {
  CompetenceDto,

} from 'src/services/CompRepoService';
export class CompDto implements CompetenceDto {
  @ApiProperty({
    description: 'The ID of the comp',
    default: 'This is a fake ID',
  })
  id: string;

  @ApiProperty({
    description: 'The title of the comp',
    minLength: 3,
    maxLength: 30,
    default: 'This is a fake title',
  })
  skill: string;
  @ApiProperty({
    
    default: 'This is a fake description',
  })
  level: number;
}