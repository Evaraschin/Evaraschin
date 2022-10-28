import math
vel = float(input("Ingrese la velocidad del auto en m/s"))
cab = float(input("Ingrese la distancia del caballo"))
freno = float(input("Ingrese la aceleración negativa en m/s"))

cal = 0-vel
tiempo = cal/freno
dist = 0+velocidad*tiempo+0.5*freno*(tiempo*tiempo)
print(dist)

if dist>cab:
    print("vas a chocar al caballo")
elif dist<cab:
    print("Estuviste a", cab-dist+"metros de chocar")
    
tiempo1 = vel*vel/2
tiempo2 = cab/tiempo1
cal2 = 0+vel*tiempo2+0.5-vel/tiempo2*(tiempo2*tiempo2)
print(cal2)