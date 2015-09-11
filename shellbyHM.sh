mkdir shelby
cd shelby
touch fizz.txt
touch buzz.txt
touch deleteme.txt
echo "fizzbuzz" > README
mkdir texts
mv *.txt texts
cd texts
rm deleteme.txt
mkdir News
cd News
curl www.nytimes.com > times.txt
grep "America" times.txt > national.txt
echo "Yer a Wizard 'Arry"
