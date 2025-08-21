require "zip"

Jekyll::Hooks.register :site, :post_write do |_site|
  puts "Gathering CSV files for packaging"

  Zip::File.open(File.join("_site", "metadata", "providers", "package.zip"), create: true) do |zipfile|
    Dir.glob(File.join("_site", "metadata", "providers", "*.csv")).each do |path|
      # Two arguments:
      # - The name of the file as it will appear in the archive
      # - The original file, including the path to find it
      zipfile.add(path.split(File::SEPARATOR).last, path)
    end
  end
end
