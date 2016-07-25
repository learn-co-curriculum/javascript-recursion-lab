describe('sum', function(){
  it('returns 0 for the empty array', function(){
    expect(sum([])).toEqual(0)
  })

  it('returns the correct value for array of length 1', function(){
    expect(sum([1])).toEqual(1)
  })

  it('returns the correct sum for even length arrays', function(){
    expect(sum([1,3,4,9,8,7])).toEqual(32)
  })

  it('returns the correct sum for odd length arrays', function(){
    expect(sum([3, 1,3,4,9,8,7])).toEqual(35)
  })
})

describe('fact', function(){
  it('returns 1 for fact(0)', function(){
    expect(fact(0)).toEqual(1)
  })

  it('returns 1 for fact(1)', function(){
    expect(fact(1)).toEqual(1)
  })

  it('returns 120 for fact(5)', function(){
    expect(fact(5)).toEqual(120)
  })

  it('returns 24 for fact(4)', function(){
    expect(fact(4)).toEqual(24)
  })
})
