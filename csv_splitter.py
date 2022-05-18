import csv
import datetime
print(datetime.datetime.strptime('08/04/2014 02:29:00 PM', "%m/%d/%Y %I:%M:%S %p").strftime('%p'))

with open('crime-atlas-seattle/assets/SPD_Crime_Data__2008_Present.csv') as fin:    
    csvin = csv.DictReader(fin)

    # Category -> open file lookup
    outputs = {}
    for row in csvin:
        cat=datetime.datetime.strptime(row['Report DateTime'], "%m/%d/%Y %I:%M:%S %p").hour
        # Open a new file and write the header
        if cat not in outputs:
            fout = open('{}.csv'.format(cat), 'w')
            dw = csv.DictWriter(fout, fieldnames=csvin.fieldnames)
            dw.writeheader()
            outputs[cat] = fout, dw
        # Always write the row
        outputs[cat][1].writerow(row)
    # Close all the files
    for fout, _ in outputs.values():
        fout.close()