import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('foo');
  });
});

describe('Legendary objects Sulfuras, Hand of Ragnaros', () => {

})

describe('Backstage passes', () => {

})

describe('Aged Brie', () => {
  it('should increase the quality after update', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 20, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe('Aged Brie');
    expect(items[0].sellIn).toBe(19);
    expect(items[0].quality).toBe(3);
  });
})
