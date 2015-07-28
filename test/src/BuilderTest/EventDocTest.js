import {readDoc, assert, find} from './../util.js';

/** @test {SingleDocBuilder} */
describe('MyRealEvent:', ()=> {
  let doc = readDoc('event/index.html');

  /** @test {SingleDocBuilder#_buildSingleDoc} */
  it('has summary.', ()=>{
    find(doc, '[data-ice="summary"]', (doc)=>{
      assert.includes(doc, '[data-ice="target"]:nth-of-type(1)', 'public MyInlineEvent1: Object this is MyInlineEvent1 desc.');
      assert.includes(doc, '[data-ice="target"]:nth-of-type(1) [data-ice="name"] a', 'event/index.html#static-event-MyInlineEvent1', 'href');
    });
  });

  /** @test {SingleDocBuilder#_buildSingleDoc} */
  it('has detail.', ()=> {
    find(doc, '[data-ice="detail"]:nth-of-type(1)', (doc)=> {
      assert.includes(doc, '#static-event-MyInlineEvent1', 'public MyInlineEvent1: Object');
    });
  });
});
