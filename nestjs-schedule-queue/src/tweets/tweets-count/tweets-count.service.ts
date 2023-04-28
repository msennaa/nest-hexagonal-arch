import { Inject, Injectable } from '@nestjs/common';
import { Tweet } from '../entities/tweet.entity';
import { InjectModel } from '@nestjs/sequelize';
import { Interval } from '@nestjs/schedule';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class TweetsCountService {
  private limit = 10;
  constructor(
    @InjectModel(Tweet)
    private tweetModel: typeof Tweet,
    @Inject(CACHE_MANAGER)
    private cacheManager,
  ) {}

  @Interval(5000)
  async countTweets() {
    console.log('Procurando tweets');
    let offset = await this.cacheManager.get('tweet-offset');
    offset = !offset ? 0 : offset;
    console.log(`offsets: ${offset}`);

    const tweets = await this.tweetModel.findAll({
      offset,
      limit: this.limit,
    });

    console.log(`Tweets ${tweets.length} encontrados`);

    if (tweets.length === this.limit) {
      this.cacheManager.set('tweet-offset', offset + this.limit, {
        ttl: 1 * 60 * 10,
      });
      console.log(`achou + ${this.limit} `);
    }
  }
}
