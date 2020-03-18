import { Controller, Get, Res, Param } from '@nestjs/common';

import {PImageService} from './past-geese-imgs.service';


@Controller('pgimgs')
export class PastGeeseImgsController {

  constructor(private imgService: PImageService){}

  @Get(':filename')
  getImage(
    @Res() res,
    @Param() params
  ) {
    res.sendFile(this.imgService.getImage(params.filename));
  }

  @Get()
  async getImageList(): Promise<string[]> {
    return this.imgService.getImageNames();
  }
}
