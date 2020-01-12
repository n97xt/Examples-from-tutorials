import csv

osoby = []

def wczytaj_osoby():
    try:
        plik = open('osoby.csv', 'r')
        csv_reader = csv.reader(plik)
        for row in csv_reader:
            osoba = {'id': int(row[0]), 'imie':row[1], 'pass':row[2]}
            osoby.append(osoba)
    except FileNotFoundError:
        plik = open('osoby.csv', 'w')
        plik.close()

wczytaj_osoby()

czy_lista = input("Czy chcesz wyświetlić liste? (T/N) ")
if czy_lista == "T" or czy_lista == "t":
    print(osoby)

