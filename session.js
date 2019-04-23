//1. SOX10 KD in LN229 
//- all histone marks in NT and KD
//- RNAseq in NT and KD
//- ChromHMM tracks in NT and KD (7 and 18 states)
//- SOX10, BRD4 cov + peak calls in NT + KD

//2. SE analysis
//- H3K27ac peak calls for all samples
//- for each subtype: average H3K27ac signal
//- SE calls for each subtype separately (example filename IDH_subtype_H3K27ac_superenhancers.bed)
//- SE universe bedfile (example filename GB_H3K27ac_superenhancers.bed)
//- SE universe subtype-specific SEs (example filename GB_H3K27ac_superenhancers_RTK_II_specific_FDR_0.1_log2FC_1.bed)

//3. methylation general (incl. features)
//- for all samples (GB+NBr): methylation bigwigs
//- DMR calls for each subtype vs NBr
//- DMV+LMR+PMD consensus per subtype

//4. 4-subtype summary, all data levels
//for each subtype separately:
//- consensus ChromHMM (7 and 18 states)
//- subtype average tracks for: methylation, RNAseq
//- DMR/DMV/LMR/PMD calls for each
//- subtype SE calls
//- subtype-specific SE bed

//5. per-subtype, all data per-sample
//for each subtype separately, for all samples in the subtype:
//- methylation bigwig
//- RNAseq bigwig
//- all histone marks plus narrow (H3K27ac, k4me1, k4me3) or broad (k27me3, k36me3, k9me3) calls
//+ everything in #6 above.


var foobar = {
	// 5. per-subtype, all data per-sample:
	"IDH (all data, per-sample)":'{"eid":["AK015","AK041","AK066","AK068","AK076","AK085","AK102","AK103","AK124","AK199","AK213","AK231"],"assay":["H3K27ac","H3K4me1","H3K4me3","H3K27me3","H3K36me3","H3K9me3","DNAMethylSBS","RNAseq","methyl_feature"],"dataset":["Raw signals","Narrow peak","Broad peak","Chromatin states"]}',
	"MES (all data, per-sample)":'{"eid":["AK005","AK006"",""AK030","AK055","AK071","AK072","AK079","AK081","AK088","AK091","AK134","AK139","AK153","AK185","AK188","AK195","AK218","AK227","AK236"],"assay":["H3K27ac","H3K4me1","H3K4me3","H3K27me3","H3K36me3","H3K9me3","DNAMethylSBS","RNAseq","methyl_feature"],"dataset":["Raw signals","Narrow peak","Broad peak","Chromatin states"]}',
	"RTK_I (all data, per-sample)":'{"eid":["AK002","AK003","AK043","AK049","AK051","AK142","AK149","AK156","AK165","AK173","AK183","AK217"],"assay":["H3K27ac","H3K4me1","H3K4me3","H3K27me3","H3K36me3","H3K9me3","DNAMethylSBS","RNAseq","methyl_feature"],"dataset":["Raw signals","Narrow peak","Broad peak","Chromatin states"]}',
	"RTK_II (all data, per-sample)":'{"eid":["AK035","AK053","AK074","AK089","AK098","AK099","AK100","AK117","AK123","AK132","AK133","AK158","AK167","AK178","AK205","AK216","AK226"],"assay":["H3K27ac","H3K4me1","H3K4me3","H3K27me3","H3K36me3","H3K9me3","DNAMethylSBS","RNAseq","methyl_feature"],"dataset":["Raw signals","Narrow peak","Broad peak","Chromatin states"]}',
	"Normal (all data, per-sample)":'{"eid":["frontal","occipital","parietal","temporal","E067","E068","E069","E071","E072","E073","E074","E125"],"assay":["H3K27ac","H3K4me1","H3K4me3","H3K27me3","H3K36me3","H3K9me3","DNAMethylSBS","RNAseq"],"dataset":["Raw signals","Narrow peak","Broad peak","Chromatin states"]}',
	"Methylation features (per-subtype)":'{"eid":["IDH","MES","RTK_I","RTK_II"],"assay":["methyl_feature"],"dataset":["Raw signals","Narrow peak","Broad peak","Chromatin states"]}'
};


