var foobar = {"foo":'{"eid":["AK071","AK076"],"assay":["H3K27ac"],"dataset":["Raw signals"]}',"bar":'{"eid":["AK124","AK199"],"assay":["DNAMethylSBS","RNAseq"],"dataset":["Broad peak"]}'};

function init_sessions( elem_id, data ) {

	var select_eid = document.getElementById( elem_id );

	// populate
	for(const key in data) {
		//for(const d of data[key]) {
		var el = document.createElement("option");
		el.value = data[key];
		el.textContent = key;
		select_eid.appendChild(el);
	}
	//apply_custom_select_style();
}

function on_change () {
	let saved_data = $.parseJSON($("#session").val());
	for(const key in saved_data) {
		$('#'+key).multiselect("clearSelection").multiselect('refresh');
		for(const d of saved_data[key]) {
			$('#'+key).multiselect('select', d);
		}
	}	
}
