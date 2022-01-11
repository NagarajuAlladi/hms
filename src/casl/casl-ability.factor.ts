import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { User } from 'src/auth/interface/user.interface';
import { Doctor } from 'src/doctor/interface/doctor.interface';
import { Patient } from 'src/patient/interface/patient.interface';
import { Action } from './action.enum';

type Subjects = InferSubjects<typeof Doctor | typeof Patient> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    if (user.isDoctor) {
      can(Action.Manage, 'all');
    } else if (user.isReceptionist) {
      can(Action.Get, 'all');
      can(Action.Create, 'all');
      can(Action.Delete, 'all');
      cannot(Action.Update, Patient);
    } else {
      can(Action.Create, Patient);
      can(Action.Update, Patient);
    }
    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
