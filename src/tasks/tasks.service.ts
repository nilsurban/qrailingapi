import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks() {
    return this.prisma.task.findMany();
  }

  async createTask(data: {
    title: string;
    description?: string | null;
    completed?: boolean;
  }) {
    return this.prisma.task.create({
      data: {
        title: data.title,
        description: data.description ?? null,
        completed: data.completed ?? false,
      },
    });
  }

  async updateTask(id: string, completed: boolean) {
    return this.prisma.task.update({
      where: {
        id: id,  
      },
      data: {
        completed: completed, 
      },
    });
  }

  async deleteTask(id: string) {
    return this.prisma.task.delete({
      where: {
        id: id,
      },
    });
  }
}
