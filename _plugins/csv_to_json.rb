Jekyll::Hooks.register :site, :post_write do |_site|
  Dir.glob(File.join("metadata", "providers", "*.csv")).each do |path|
    puts "Formatting CSV to JSON for #{path}"
    File.write(path.gsub("csv", "json"), JSON.dump(CSV.parse(File.read(path))))
  end
end
