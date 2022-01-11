import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Model } from 'mongoose';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../interface/jwt-payload.interface';
import { User } from '../interface/user.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject('USER_MODEL') private authModel: Model<User>) {
    super({
      jwtFromRequest: (req) => {
        if (!req || !req.cookies) {
          return null;
        }
        return req.cookies['access_token'];
      },
      ignoreExpiration: false,
      secretOrKey: 'abcdefghijkl',
    });
  }

  async validate(payload: JwtPayload) {
    const { username } = payload;
    const user = await this.authModel.findOne({ username });

    if (!user) {
      throw new UnauthorizedException('error in jwt-strategy');
    }
    return user;
  }
}
