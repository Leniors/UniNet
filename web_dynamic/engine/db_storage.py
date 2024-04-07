#!/usr/bin/python3
"""accessing mysql database using MySQLdb"""
import MySQLdb

db = MySQLdb.connect(host="localhost", user="uninet_dev", passwd="Uninet-m1", db="uninet_db")
cur = db.cursor()
cur.execute("SELECT * FROM uninet_db.categories")
rows = cur.fetchall()
for row in rows:
    print(row)
cur.close()
db.close()
