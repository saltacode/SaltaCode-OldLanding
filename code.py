class CafeLoverCEO:
    def __init__(self, nombre, empresa):
        self.nombre = nombre
        self.empresa = empresa
        self.cafe_consumido = 0

    def tomar_cafe(self):
        self.cafe_consumido += 1
        return f"{self.nombre} ahora está más energizado para liderar {self.empresa}!"

    def trabajar(self):
        if self.cafe_consumido > 0:
            return f"Trabajando duro en {self.empresa}... ¡Gracias, café!"
        else:
            return f"{self.nombre} necesita café para empezar a trabajar en {self.empresa}."

oscar = CafeLoverCEO("Oscar Vargas", "SaltaCode")

oscar.tomar_cafe()
oscar.trabajar()