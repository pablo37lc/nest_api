import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entitiy';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesServive: MoviesService) {}

    @Get()
    getAll(): Movie[] {
        return this.moviesServive.getAll();
    }

    @Get("/:id")
    getOne(@Param("id") moiveId: number): Movie {
        return this.moviesServive.getOne(moiveId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto) {
        return this.moviesServive.create(movieData);
    }

    @Delete("/:id")
    delete(@Param("id") movieID: number) {
        return this.moviesServive.deleteOne(movieID);
    }

    @Patch("/:id")
    path(@Param("id") movieID: number, @Body() updateData: UpdateMovieDto) {
        return this.moviesServive.update(movieID, updateData);
    }

}
