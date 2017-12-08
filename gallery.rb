
html-array = []
html = ""
Dir.foreach("images/thumbs") {|image|
html .push("<div class='item'>
	<a href='?img=#{image}'>
		<img src='images/thumbs/#{image}' width='420px' alt=''style='border: 3px solid #fff'/>
	</a>
</div>
"})

for (int i = 0; i < html-array.length; i++){
	if (i != 0 || i != 1)
		html += html-array[i]
}

File.open("output", 'w') {|f| f.write(html) }
