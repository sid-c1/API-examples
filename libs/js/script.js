	$('#btnICAO').click(function() {

		$.ajax({
			url: "libs/php/weathericao.php",
			type: 'POST',
			dataType: 'json',
			data: {
				ICAO: $('#txtICAO').val()
			},
			success: function(result) {

				// console.log(result);

				if (result.status.name == "ok") {

					$('#txtName').text(result.data.stationName);
					$('#txtCountry').text(result.data.countryCode);
					$('#txtTemperature').text(result.data.temperature);
					$('#txtWind').text(result.data.windSpeed);
					$('#txtHumidity').text(result.data.humidity);
					$('#txtVisibility').text(result.data.clouds);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});
	$('#btnCountry').click(function() {

		$.ajax({
			url: "libs/php/country.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#txtLat').val(),
				long: $('#txtLong').val()
			},
			success: function(result) {

				// console.log(result);

				if (result.status.name == "ok") {
					$('#txtCountryName').text(result.data[0].countryName);
					$('#txtCountryCode').text(result.data[0].countryCode);
					$('#txtDistance').text(result.data[0].distance);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});
	$('#btnTimezone').click(function() {

		$.ajax({
			url: "libs/php/timezone.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#txtTimeLat').val(),
				long: $('#txtTimeLong').val()
			},
			success: function(result) {

				// console.log(result);

				if (result.status.name == "ok") {
					$('#txtTimeCountry').text(result.data.countryName);
					$('#txtGMTOffset').text(result.data.gmtOffset);
					$('#txtSunrise').text(result.data.sunrise);
					$('#txtSunset').text(result.data.sunset);
				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	
	});