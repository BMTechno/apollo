/**
 * Fake
 * @author Rezki
 */

module.exports = function() {
    var faker = require( 'faker' )
    ,   Chance = require( 'chance' )
    ,   _ = require( 'lodash' )
    ,   moment = require( 'moment' );

    faker.locale = 'sk';
    var chance = new Chance();

    return {
        "adverts": _.times( 12, function(n) {
            return {
                id: n,
                guid: faker.random.uuid(),
                ad_id: faker.finance.account() + faker.random.number(),
                ad_name: faker.commerce.productAdjective() + ' ' + faker.commerce.productName(),
                ad_price: faker.random.number() * 1000,
                ad_price_negotiable: faker.random.number() % 2 === 0 ? 1 : 0,
                ad_created: moment.utc(faker.date.past()).subtract(1, 'd').valueOf(),
                ad_posted: moment.utc(faker.date.past()).valueOf(),
                ad_region: faker.address.country(),
                ad_city: faker.address.city(),
                ad_condition: faker.random.number() % 2 === 0 ? 1 : 0,
                ad_verified: faker.random.number() % 2 === 0 ? 1 : 0,
                ad_img_featured: {
                    url: '/asset/image/sample/ad/sample-image-' + chance.integer({ min: 1, max: 12 }) + '.jpg',
                    alt: 'Featured Image'
                },
                ad_img_gallery: function() {
                        var _a = chance.unique( function() { return chance.integer({ min: 1, max: 10 }); }, 10);

                        _a = _.map( _a, function( n ) {
                            return {
                                url: 'http://lorempixel.com/g/640/640/cats/' + n,
                                alt: 'Kitten ' + n
                            };
                        });

                        return _a;
                    }(),
                seller_name: faker.company.companyName(),
                seller_contact: faker.phone.phoneNumberFormat(),
                seller_last_location: faker.address.country(),
                seller_last_login: moment.utc(faker.date.past()).subtract(1, 'w').valueOf(),
                seller_registered: moment.utc(faker.date.past()).subtract(1, 'M').valueOf(),
                seller_verified: faker.random.number() % 2 === 0 ? 1 : 0
            };
        })
    }
};
