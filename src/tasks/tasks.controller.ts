import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDTO } from './TaskDTO';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async getTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  async addTask(@Body() newTask: TaskDTO) {
    return this.tasksService.createTask(newTask);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.tasksService.deleteTask(id); 
  }

  @Patch(':id')
  async updateTask(@Param('id') id: string, @Body() completed: { completed: boolean }) {
    return this.tasksService.updateTask(id, completed.completed); 
  }
}
