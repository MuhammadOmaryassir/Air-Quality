import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PollutionDocument = HydratedDocument<Pollution>;

@Schema()
export class Pollution {
  @Prop()
  city: string;

  @Prop()
  latitude: string;

  @Prop()
  longitude: string;

  @Prop()
  ts: Date;

  @Prop()
  aqius: number;

  @Prop()
  mainus: string;

  @Prop()
  aqicn: number;

  @Prop()
  maincn: string;
}

export const PollutionSchema = SchemaFactory.createForClass(Pollution);
