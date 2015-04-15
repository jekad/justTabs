module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		uglify: {
			build: {
				src: 'src/js/justTabs.js',
				dest: 'dist/justTabs.min.js'
			}
		}

    });

	grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};