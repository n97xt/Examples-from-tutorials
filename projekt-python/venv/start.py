import csv

osoby = []

def wczytaj_osoby():
    try:
        plik = open('osoby.csv', 'r')
        csv_reader = csv.reader(plik)
        for row in csv_reader:
            osoba = {'id': row[0], 'imie':row[1], 'pass':row[2]}
            osoby.append(osoba)
    except FileNotFoundError:
        plik = open('osoby.csv', 'w')
        plik.close()

def dodaj_osobe():
    imie = input("Podaj imie: ")
    plik = open('osoby.csv', 'a', newline='')
    csv_writer = csv.writer(plik, delimiter=",")
    csv_writer.writerow([0, imie, "asdasda"])

wczytaj_osoby()

czy_lista = input("Czy chcesz wyświetlić liste? (T/N) ")
if czy_lista == "T" or czy_lista == "t":
    print(osoby)

czy_dodac = input("Czy chcesz dodać nową osobę? (T/N) ")
if czy_dodac == "T" or czy_lista == "t":
    dodaj_osobe()

