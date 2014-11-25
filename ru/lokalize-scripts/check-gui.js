// #!/usr/bin/env kross

function fileSaved(path)
{
    if (!Editor.isValid())
        return;

    var filteringStarted=false;

    for (entry=0;entry<Editor.entryCount();entry=entry+1)
    {
        if (Editor.entryPluralFormCount(entry)>1
            && Editor.entryTarget(entry,0).length
            && Editor.entryReady(entry)
            && Editor.entryTarget(entry,0).indexOf("%1")==-1
            && Editor.entrySource(entry,1).indexOf("%1")!=-1)
        {
            if (!filteringStarted)
            {
                filteringStarted=true;
                Editor.setEntriesFilteredOut(true);
            }
            Editor.setEntryFilteredOut(entry,false);
        }
    }
    
    if (!filteringStarted)
        return;
    
    var krossforms = Kross.module("forms");
    krossforms.showMessageBox("Information", "Syntax check",
                              "Syntax check has found possible erorrs.\n"+
                              "Translation Units view lists suspicious entries.\n"+
                              "Reasons: specify %1 in first plural form explicitly for cases like 21, 31, ...");
}

