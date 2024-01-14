# first = input("First Num ")
# second = input("Second Num ")
# sum = float(first) + float(second)

# print("sum ",sum)

weight = float(input("Weight: "))
type = input("(K) or (L)bs: ")
print(type)
if type == "k" or type == "K":
  print("Weight in kilograms: ", round(weight,2))
  print("Weight in pounds: ", f"{weight / 0.45359237:.2f}")
else: 
  print("Weight in pounds: ", f"{weight:.2f}")
  print("Weight in kilograms: ", f"{weight * 0.45359237:.2f}")
