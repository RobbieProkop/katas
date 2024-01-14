class Kettle(object):
  def __init__(self,make,price):
    self.make=make
    self.price=price
    self.on=False

kenwood = Kettle("Kenwood", 8.99)
print("Make: ", kenwood.make)
print("Price: ",kenwood.price)

kenwood.price = 12.75
print("Price Updated: ",kenwood.price)

hamilton = Kettle("Hamilton", 14.55)

print("Hamilton: ", hamilton.make, hamilton.price)
