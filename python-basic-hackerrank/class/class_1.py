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

print("Models: {} = {}, {} = {}".format(kenwood.make, kenwood.price, hamilton.make, hamilton.price))
print("Models: {0.make} = {0.price}, {1.make} = {1.price}".format(kenwood, hamilton))
print(f"Models: {kenwood.make} = {kenwood.price}, {hamilton.make} = {hamilton.price}")