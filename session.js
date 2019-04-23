//1. SOX10 KD in LN229 
//- all histone marks in NT and KD
//- RNAseq in NT and KD
//- ChromHMM tracks in NT and KD (7 and 18 states)

//2. active enhancer analysis
//- H3K27ac + H3K4me1 average per subtype, including peak calls
//- consensus chromhmm per subtype (7 and 18 states)
//- per-subtype: enhancer beds (example filename RTK_II_enhancers_annotated_with_histone_signal.bed)
//- active enhancer universe, including subtype-specific calls (example filenames GB_active_enhancers_RTK_II_specific_FDR_0.1_log2FC_1.bed, GB_active_enhancers.bed)

//3. SE analysis
//- H3K27ac peak calls for all samples
//- for each subtype: average H3K27ac signal
//- SE calls for each subtype separately (example filename IDH_subtype_H3K27ac_superenhancers.bed)
//- SE universe bedfile (example filename GB_H3K27ac_superenhancers.bed)
//- SE universe subtype-specific SEs (example filename GB_H3K27ac_superenhancers_RTK_II_specific_FDR_0.1_log2FC_1.bed)


//4. CR analysis
//- for all GBs (and NBr too?): methylation + RNAseq bigwigs
//- all neg/posCR bedfiles: full sets, and then the subtype-specific ones.

//5. methylation general (incl. features)
//- for all samples (GB+NBr): methylation bigwigs
//- CRs
//- DMR calls for each subtype vs NBr
//- DMV+LMR+PMD consensus per subtype

//6. 4-subtype summary, all data levels
//for each subtype separately:
//- consensus ChromHMM (7 and 18 states)
//- subtype average tracks for: methylation, RNAseq
//- subtype enhancer calls
//- subtype-specific enhancer bed
//- DMR/DMV/LMR/PMD calls for each
//- subtype SE calls
//- subtype-specific SE bed

//7. per-subtype, all data per-sample
//for each subtype separately, for all samples in the subtype:
//- methylation bigwig
//- RNAseq bigwig
//- all histone marks plus narrow (H3K27ac, k4me1, k4me3) or broad (k27me3, k36me3, k9me3) calls

//+ everything in #6 above.

//8. bivalent promoters
//- for all samples: H3K4me3 + H3K27me3 signal, plus MACS2 peak calls
//- promoter annotation
//- RNAseq bigwigs (to see gene expression)
//- subtype consensus ChromHMM  (7 and 18 states) (including NBr)
var foobar = {
	"foo":'{"eid":["AK071","AK076"],"assay":["H3K27ac"],"dataset":["Raw signals"]}',
	"bar":'{"eid":["AK124","AK199"],"assay":["DNAMethylSBS","RNAseq"],"dataset":["Broad peak"]}',
	"IDH (all)":'{"group":["IDH"],"assay":["H3K27ac","H3K4me1","H3K4me3","H3K27me3","H3K36me3","H3K9me3","DNAMethylSBS","RNAseq"],"dataset":["Raw signals","Narrow peak","Broad peak","Chromatin states"]}'
};

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
