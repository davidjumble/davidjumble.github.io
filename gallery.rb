

html = ""
Dir.foreach("images/thumbs") {|image|
html += "<div class='item'>
	<a href='?img=#{image}'>
		<img src='images/thumbs/#{image}' width='420px' alt=''style='border: 3px solid #fff'/>
	</a>
</div>
"}

puts html

File.open("output", 'w') {|f| f.write(html) }