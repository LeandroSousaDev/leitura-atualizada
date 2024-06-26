import { IsNotEmpty, IsUUID } from 'class-validator';
import { Wishlist } from '../entities/wishlist.entity';

export class WishlistDto implements Wishlist {
  @IsNotEmpty({ message: 'Can`t be empty' })
  @IsUUID('all', { message: 'Must be a valid UUID' })
  userId: string;

  @IsNotEmpty({ message: 'Can`t be empty' })
  @IsUUID('all', { message: 'Must be a valid UUID' })
  bookId: string;
}
