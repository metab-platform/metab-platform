const a=[.89,.65,.3,.22,.14,.14,.42,0,.08,0,.07,.79,.8,.03,.02,.32,.48,.53,.46,.78,.93,0,.01,0,.14,.65,0,.1,.51,0,.1,0,.13,.03,.01,.46,.77,0,.75,.21,.08,.64,0,.51,.3,0,.01,.04,0,0,.09,.34,.83,.74,0,.06,.19,0,.01,.74,0,.11,.03,.33,0,0,.12,0,.06,.59,.97,.5,0,.69,.91,.87,.01,0,.75,0,.01,.27,.6,.75,.34,0,.7,.58,.47,.12,0,.63,0,.3,.24,.95,.35,.25,.88,0,.93,.18,.05,.97,.01,.39,0,0,1,.1,.41,0,.61,.67,.76,.35,.87,0,.02,.56,.86,.03,0,.79,0,0,.8,.39,.07,.92,0,.1,.81,0,.68,.04,0,.35,0,.52,0,.28,.01,.99,.16,.03,.78,.13,.15,.6,.24,0,.48,.16,0,0,.34,.89,.48,0,0,0,.07,0,0,0,.38,0,0,.34,.63,.04,0,0,.02,0,.68,0,0,.89,0,.56,.04,.33,.01,.25,.5,.01,0,.64,.87,0,.79,.01,0,.15,.01,.05,.19,0,.24,.14,.59,.81,.27,0,0,0,0,.7,0,0,.69,.18,.01,0,.47,0,0,0,.16,.02,.2,.98,.04,.72,0,.01,.01,0,.35,.55,0,.63,.67,.28,0,.01,.02,.43,0,0,0,0,0,0,.41,.18,.91,.75,0,.03,0,.09,0,.12,.24,.71,.06,.95,.28,0,.08,.01,.06,.01,.06,.34,.25,.65,.02,.27,.57,.08,.95,.75,0,0,.06,0,0,0,.12,.18,.02,.23,0,.62,0,0,0,0,.27,0,0,0,.56,.1,.02,0,.28,.25,0,.44,.89,.22,.53,0,0,.2,.07,.31,.07,.15,.23,0,0,0,.08,0,.48,.52,.01,.32,0,.01,.46,.79,.14,.03,.79,.09,.38,.44,0,.25,0,.03,0,.05,0,0,.08,.77,.47,.42,.43,0,0,.02,0,0,.5,.04,.1,.15,.06,.69,.12,.82,.07,.07,.01,0,.56,.07,.03,.68,0,.61,0,.45,.04,.02,0,0,.06,.61,.54,0,.57,.99,.93,.14,.7,.37,.97,.77,.51,.31,.03,.89,.94,0,0,.25,0,.91,.65,0,.14,.9,.08,.35,0,.62,.02,.01,.05,.38,.19,.38,.65,.06,.03,.83,.01,.78,0,.38,.03,.68,.43,.69,.65,.93,.78,.54,0,0,0,.06,.56,.05,0,.32,.02,.06,.16,0,0,.82,.03,.22,0,0,.78,.21,.61,0,.01,0,.11,.81,.07,.06,0,.88,0,0,.17,.01,.13,0,.02,.34,.34,.13,.49,.89,0,.96,.2,.89,0,.38,0,0,.24,0,0,.05,.05,0,0,.91,0,0,.9,.82,.06,.65,.1,0,.01,.71,0,.5,.01,0,0,.61,.33,.05,.25,.16,.04,.62,.99,0,.01,.51,.12,.05,0,0,0,0,0,.81,.56,.06,.86,.54,.3,.94,.17,.02,.24,.02,0,0,.84,0,.71,.02,0,.34,0,.75,.24,0,.18,0,.45,.33,.02,0,.57,.35,0,.71,.12,.96,0,.58,.01,0,.03,.82,.08,0,.33,0,.42,.79,.78,.65,0,.17,.06,.39,.58,0,.18,.56,.73,.17,0,.54,.29,.32,0,.7,0,.01,.3,.11,.31,.58,.63,.74,.37,.16,0,.26,.04,.49,0,0,.01,.99,.06,0,0,0,0,.12,.53,.88,.83,.15,.47,0,.68,.47,.22,0,.08,.56,0,0,0,.65,.03,.69,.01,0,0,0,.16,.03,.97,0,.35,0,.53,0,0,0,0,.97,.01,.2,.7,.06,0,.51,.49,0,.03,.06,0,.2,.43,.54,0,.27,.9,.71,.19,0,.45,0,.76,.81,.9,.69,.4,.32,.23,.53,.53,0,0,0,.04,.85,.13,.3,.84,.06,.74,.79,0,.01,.05,.64,.39,0,.64,.64,0,.38,.13,.95,.02,.17,.48,.5,.71,0,0,.07,.33,.36,.89,.42,.94,0,.06,0,0,0,.59,.59,.34,.02,.42,.23,0,.11,.56,.37,.53,.68,.38,0,.25,.05,.05,0,.38,.56,0,0,.59,.95,.59,.42,0,.12,0,0,.65,.51,.19,.22,.1,0,.58,0,.2,.06,.95,.04,.07,.08,.11,.78,.48,0,.63,0,.14,.86,.02,.89,0,.42,0,0,.03,.19,0,.12,0,0,.21,0,.6,.1,.42,.01,.42,0,.01,0,.05,0,0,.31,.03,0,.61,.01,.22,.03,.06,0,.34,.84,.09,.01,.69,.41,0,.87,0,.95,.71,.85,.3,0,.22,0,.44,0,.03,.31,.13,.12,0,.97,.25,.94,.14,.01,0,.53,.12,.59,.02,.17,.14,0,.83,.01,.64,0,0,.53,.98,0,0,.05,0,0,0,.12,.28,0,.85,.61,.32,.44,0,0,0,0,.01,.56,.16,.8,.01,0,0,.39,.01,0,.51,.26,.98,0,0,0,.54,0,.4,.09,0,.04,.29,.22,.68,.24,0,.79,0,0,.6,.99,.64,0,.03,.9,.35,.15,.27,.21,.69,.08,.94,.49,.45,.62,.7,0,.81,0,.24,0,0,0,.25,0,.06,0,0,.17,0,.43,.37,.2,0,.12,.08,.74,.07,0,0,.39,.28,.51,.23,.27,0,.73,.05,.09,.43,.8,0,.51,.02,.11,0,.2,.8,.04,0,.82,.38,.38,0,.96,.04,.27,.32,.39,.87,.45,0,.4,.04,.06,.86,0,.94,.17,.02,.11,0,.03,.78,.37,.03,0,0,.25,.14,0,0,0,0,0,0,.36,.75,0,0,0,0,0,.55,0,.83,.33,.9,.7,.97,.35,.23,.73,.4,0,.47,.92,.21,.68,.01,0,0,0,0,.45,0,.32,.01,.49,.21,.1,.89,0,.18,.06,.01,0,.57,.44,0,.43,.12,.07,.52,0,.74,0,.5,.26,0,.55,0,.35,.97,0,.7,.93,.99,.3,0,0,.21,0,.69,.88,.14,.58,0,.88,0,.81,0,.16,0,.52,0,.15,.66,.86,0,0,0,.62,.25,.06,.64,0,0,.89,.47,0,.79,.42,0,.01,.55,.92,0,.82,.1,.88,.21,.01,.96,.01,0,.45,.07,.06,0,.01,0,.65,.24,.57,0,.27,.05,.43,.13,0,0,.74,0,0,.59,.21,0,.42,.11,0,.16,.55,.05,.73,.37,0,0,.01,0,.21,.5,.57,.33,.13,.51,0,.1,.33,.4,.02,.11,.01,.01,.21,.99,.04,.89,.13,.38,.25,0,.07,.76,0,.25,.07,.07,.24,.73,0,.48,0,.81,.01,.08,.41,.13,0,0,.49,.07,.03,0,.54,.28,.29,.25,.27,0,.39,.59,0,.14,.53,.81,.44,.73,.97,1,0,.04,.33,.05,.98,.74,.05,0,.03,.48,.35,.54,.05,.04,0,.25,.15,.61,0,.08,0,.59,0,.33,.03,.08,.81,.46,0,.01,.08,.13,.19,.34,0,.99,0,0,0,0,0,.03,.79,.1,0,.58,.44,.72,.15,.47,.28,.6,.1,.29,.28,.65,.57,.05,.25,.27,.9,.12,0,.99,.33,0,.16,0,.05,.08,.17,.72,0,0,0,0,0,0,.8,.53,.37,.14,0,.22,0,.31,.67,0,.65,0,.04,.09,0,.69,.64,.21,.21,.42,.45,0,.97,.06,0,0,0,.38,.01,0,0,.81,.24,.73,.44,.11,.01,0,0,.67,.14,0,.63,.26,.02,.49,.13,0,.48,.85,.2,.23,.81,.73,.01,0,.01,.87,.32,.62,0,.09,.13,0,.29,1,.27,0,.17,.49,0,0,.65,0,.01,.12,.31,.16,0,.9,.93,0,0,.03,.44,.16,.25,0,0,.03,0,.14,.09,.77,.13,.01,.1,.01,0,.55,.01,.33,.06,0,.08,0,.53,.01,0,.03,.01,.02,0,0,.88,0,0,.89,.42,0,.12,.01,.2,0,0,.96,.01,0,.64,.02,.42,0,.1,.11,.63,.37,0,.24,0,.01,.63,.02,.26,.07,.09,.13,.2,.18,0,.09,.6,0,.64,.71,0,.77,.25,.04,.27,.2,.32,.38,0,.16,0,.59,1,.31,.41,0,.09,0,.03,0,.4,.86,0,.92,.05,.25,.93,.75,.02,.92,.59,.79,.85,.92,0,.01,.43,.14,0,.81,.01,0,.1,.3,.73,.56,.96,0,.05,.05,0,.03,.45,0,.25,0,.71,0,.99,.44,.23,0,.86,0,.03,.3,0,0,.02,0,0,.16,0,.34,.62,.37,.53,.08,0,.51,0,.02,0,.8,0,0,.24,.67,.84,.1,0,.51,.39,.49,.98,.14,0,0,0,0,.17,.05,.32,.03,.59,.85,0,0,.67,0,.82,0,.99,0,.31,0,.09,.09,0,.02,0,.04,.41,.01,0,.07,.67,.05,.64,.03,.08,.6,0,.3,.12,.16,0,.4,.07,.21,.07,.19,0,.03,0,0,.83,.21,.05,.46,.09,.2,0,0,0,0,0,0,.96,.03,.36,0,0,0,.83,.19,.41,.18,0,0,0,.81,0,.85,0,.82,.13,.79,.12,.81,.18,.59,.31,.31,.1,.81,0,0,.49,.63,.37,.01,0,0,0,0,.08,.19,.26,.41,0,.26,0,.26,.72,.41,.94,.64,.83,.56,.28,0,.2,0,.02,.87,.05,.8,.66,0,.57,0,0,.5,.27,.4,.48,0,.06,.05,.11,0,.76,0,0,.03,0,.93,.06,.21,.02,.19,0,.78,0,0,0,.53,0,.16,0,.07,.32,.01,.18,.62,.01,.39,.2,.33,0,0,0,.87,0,0,0,.36,0,.98,.26,.57,.1,.19,0,0,.07,0,0,.06,.39,.56,.66,.76,.03,.83,.3,.02,0,0,0,0,.27,.21,.62,.01,.36,.02,0,.82,0,.01,.01,0,.17,.01,.57,.6,.78,0,.12,0,0,0,0,0,.11,.39,.2,.32,.06,.01,.93,1,.19,.45,.82,.88,0,.5,.23,0,.92,.06,.08,.57,.88,0,.01,.02,0,.2,.96,.58,.51,.21,.07,.64,.61,.78,.52,.16,.01,0,0,.24,.02,.51,.16,.35,.33,.48,.22,1,0,.01,.79,.04,.38,.65,0,0,0,.17,.01,.49,.04,0,0,0,.67,.75,.95,0,.96,.62,.59,.04,.75,.97,.79,0,.87,.09,.72,.14,.03,0,.69,0,.93,.84,.02,.5,0,.46,0,.41,.23,.73,.64,.46,.12,.11,.23,0,0,0,.04,.53,.73,.06,0,0,.56,.76,.11,.57,.57,0,.32,0,.01,.06,0,0,.82,.5,.48,.93,0,.15,0,.93,0,.85,.35,.97,.92,.71,0,0,0,.43,.82,.39,.07,.83,.18,.57,.27,.3,.15,.01,.39,.5,0,.22,0,.02,.15,.24,.46,.7,.09,0,.51,.14,.76,0,.61,0,.73,0,0,.19,0,.39,.17,0,0,.04,.85,.57,.22,.75,.04,.87,0,.71,.06,.18,.56,.8,.18,.02,.01,0,.26,.03,.97,.17,0,.82,.83,0,0,.93,.13,.23,.21,.8,.57,.24,.34,.34,.1,.09,.02,.53,0,.01,.78,.46,.76,.61,.65,0,.26,.02,.12,.7,0,0,.35,0,0,.63,0,.38,.77,.18,.59,.21,0,.84,0,.28,0,.12,.1,.15,.92,.91,.22,.29,.4,0,.24,.44,.06,0,.46,.3,.31,.72,.21,.34,0,.26,.71,.11,0,.06,.35,0,.57,.2,.95,.09,.86,.63,.18,.39,.83,0,0,.05,.98,.97,.72,.38,.67,0,0,.07,0,0,.66,.19,.47,.02,.98,.03,.85,.79,.19,.07,.39,0,0,.17,.54,.03,.05,.05,.44,0,.47,0,.38,.37,.47,0,.09,.3,.15,.86,0];export{a as pvalData};
