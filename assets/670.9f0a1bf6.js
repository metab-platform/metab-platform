const a=[0,0,0,.95,0,.44,.01,.39,0,.06,0,.38,.84,0,0,.95,0,.45,.17,.31,.45,0,.89,0,0,0,0,.94,0,.01,0,0,0,.07,.88,.1,0,0,0,0,.69,0,0,.43,.8,0,.19,.25,.27,.05,.01,.7,.09,0,.01,0,0,.09,0,0,0,0,0,.95,.01,.04,0,0,.95,.95,.39,0,0,.1,0,.88,.43,0,0,.94,0,0,.37,0,.01,0,0,.79,0,0,.59,.5,0,0,.47,.62,0,.07,.14,0,.5,0,0,.49,0,.47,.6,.33,0,0,.62,.03,.56,0,.02,0,.42,.02,.01,0,.46,.33,.01,.82,.82,0,0,.07,.12,0,.49,0,.23,.9,.01,.43,.98,.01,.03,.5,0,.08,0,0,.37,.09,.7,.97,0,.14,0,.42,.6,.76,.55,.79,.09,.69,.02,0,.07,0,.48,.04,0,0,0,.02,.51,0,.53,.1,.7,.05,0,.23,.65,.39,.01,0,.65,.46,.89,0,0,.9,.79,.32,.32,.08,.62,.11,.36,0,0,0,0,.04,.52,0,0,0,0,.56,0,0,.43,.06,.05,.57,.85,0,.37,0,.1,0,.55,.12,.22,.1,0,0,0,0,0,0,.91,.04,.14,.41,.24,.35,0,0,.4,.15,0,.02,.93,.53,.01,0,.94,.38,0,.48,.23,.38,.15,.6,.76,.15,.01,.21,0,.91,.97,0,.63,0,.4,.85,0,0,.92,0,.25,0,.1,0,.25,0,0,0,0,.35,.83,0,0,.39,.36,.06,0,0,.08,0,.22,0,.9,.04,.51,.04,0,.72,.29,0,0,0,.22,.27,.76,0,.01,.28,.57,0,.18,0,.66,.01,0,.39,.11,.32,.52,.35,.83,.68,0,.23,0,.09,0,0,.19,.03,0,.24,.67,.02,0,0,.03,.41,0,.98,.35,0,.32,0,0,0,.02,.96,0,0,.32,.02,0,.05,0,.04,.09,.05,0,0,.02,.56,0,0,0,.2,.14,.65,.37,0,.09,0,0,.15,.1,.03,0,.85,0,.02,0,0,.76,.19,.34,.83,.54,.09,.8,.01,.33,.54,0,0,0,.77,.46,.26,.21,0,0,.13,.36,.79,.04,.11,0,0,.18,.43,0,0,0,0,0,0,.01,0,.65,.81,0,0,.27,.03,.37,0,.6,.71,0,0,0,.59,.08,0,.69,.56,0,.65,.76,0,.11,0,0,0,0,0,0,.02,.19,0,0,0,.01,0,0,0,0,.5,.33,.59,.08,0,.19,0,0,0,0,0,.09,.78,0,.48,0,0,.19,0,0,.27,.27,0,0,.09,0,.02,0,0,0,0,.09,.42,.02,0,0,0,.64,.27,.8,0,0,0,.22,.97,0,.1,.03,.65,0,0,0,.23,.74,0,0,0,0,.76,0,.46,.23,.4,.92,.57,0,0,.41,0,.56,.42,0,.76,.67,.02,.48,0,.24,.13,.35,.18,.53,.34,.32,.04,.13,.99,.93,.46,.24,.83,.52,.13,.42,.81,0,.02,.12,0,0,0,0,.22,0,.56,.05,.91,0,.13,0,.82,.96,.27,.54,.83,.7,.51,0,0,0,.01,0,0,.48,0,.18,0,.51,.14,0,.06,0,0,0,0,.37,0,.38,.26,.99,0,.69,0,0,0,0,.98,0,0,0,.18,0,0,.87,.05,.23,.07,.36,0,.26,.1,.12,.87,0,.48,.88,.58,.55,.69,.55,.86,.81,.01,0,.44,0,.1,.62,0,.01,.03,.13,0,0,.47,.4,0,.2,0,0,.52,.03,0,.09,0,.82,0,.74,0,.78,0,0,.77,0,.83,.66,.75,0,0,0,.51,.02,.35,.19,.16,0,0,0,.71,.17,.01,0,0,0,0,0,.06,.89,.36,0,0,.37,.01,0,0,0,.21,.7,.03,.39,.16,.8,.26,.03,.1,0,0,0,.04,0,0,.73,.6,.19,0,.57,.01,0,.21,.81,.67,.09,.97,.02,.92,.17,.26,.15,0,0,.67,0,0,0,0,.01,0,0,.26,0,.57,0,.73,0,.16,.96,.59,0,0,0,.55,.94,0,0,0,.63,0,.17,.38,.01,0,0,.83,.26,0,0,.76,.02,.01,0,.05,0,0,0,.06,.78,.01,.12,.68,0,.22,.18,.02,.37,.35,0,.05,0,.05,.23,0,0,0,0,.01,.56,.01,0,.82,0,0,0,.03,0,0,.09,.01,.09,0,0,0,0,0,0,0,.25,.86,.55,.24,0,.01,0,.64,0,.7,.1,0,.72,0,.88,0,.97,0,.34,.4,.33,.83,.96,0,.77,.02,1,.08,.94,.89,.12,0,0,0,.97,.66,.03,0,.08,.03,0,.48,.89,.11,0,.55,.33,.15,.41,.94,.02,.33,0,0,.22,0,.44,.52,0,.38,.03,.3,.06,.16,.89,.19,.91,.54,0,.39,.1,.15,.02,0,.12,0,0,.56,.12,0,0,.78,0,0,0,0,0,.3,0,.15,0,0,.26,.02,.68,.29,.79,0,0,.91,.25,.42,.78,.5,.33,.04,0,0,.62,.57,.14,.75,.94,.74,0,0,0,0,.74,0,0,.24,.14,0,0,0,0,0,0,.26,0,0,.76,.5,.86,0,.41,.75,.33,0,.99,.02,.84,.83,.22,.1,.68,0,0,.54,0,.72,0,.41,.55,.7,0,.32,.85,.07,0,.29,.39,.07,0,0,0,.61,.97,.81,.09,0,0,.38,0,.06,.98,1,0,.22,.54,.02,0,.13,.2,.5,.34,.37,.24,.68,.12,.57,.79,.92,.8,.15,.23,.12,.72,.09,.38,.8,.82,0,.28,.56,.95,.03,0,0,.2,.49,0,.24,0,0,.09,.11,0,.5,.15,.66,.26,.27,.32,.02,.9,0,0,1,0,.69,.14,0,.34,.9,.73,.27,.41,.05,.06,0,.76,0,.07,.15,0,.09,0,.76,.82,0,.15,.94,.45,0,.02,.04,.05,0,0,.87,.06,0,0,0,.51,0,0,.08,0,0,.14,0,.31,.87,.01,.19,.04,.06,0,0,.14,.08,0,0,0,0,.89,.07,0,0,.22,0,.02,0,0,0,0,.78,0,.36,.07,.01,0,.78,.35,.16,.14,0,.13,0,.06,0,.08,.47,0,.48,.5,0,.58,.38,.33,0,0,.07,.16,0,0,.72,.09,.35,0,.53,.61,0,0,.4,0,.28,0,.62,.4,.06,0,0,.73,.43,.34,.44,.33,.42,0,0,.67,.05,0,.03,0,0,0,0,.1,.58,0,.07,0,.06,0,.28,0,.69,.35,.09,.62,.03,0,.12,0,0,.03,0,.03,.06,0,.74,0,.76,.01,0,0,0,.49,0,.69,0,.07,0,.03,0,0,.98,0,.31,.01,.02,0,.32,.08,0,0,.68,.37,0,0,.32,.3,.17,.97,.11,.03,.77,.14,0,0,.23,0,0,0,.27,.65,.44,0,0,0,.98,.27,.3,.7,.01,0,.26,0,.17,.79,.52,.14,.01,0,0,.73,0,0,0,0,.12,.61,.02,0,.01,0,.79,0,.89,0,0,.15,.15,0,.01,.38,.33,0,.79,0,.21,0,.47,0,.16,.94,.15,.01,0,0,0,.01,.18,.15,0,0,0,0,0,0,.13,.08,0,0,.45,0,.09,.02,0,0,.02,.94,.7,.04,0,0,.06,.01,.77,.1,0,.37,.42,0,0,0,.03,.71,0,0,0,.08,.02,.04,.79,.89,0,0,.03,.75,0,.76,.45,.2,0,.89,.32,.01,.37,0,0,.33,.14,.38,.01,.02,.72,0,0,.22,.07,0,.48,0,.1,.37,0,0,.59,.82,0,.25,0,0,0,.08,0,.81,0,.04,.67,.15,.16,.78,.97,0,0,.76,.01,.01,0,0,.22,.51,0,0,.02,.87,.43,.58,0,0,0,0,.01,.01,.38,0,0,.09,.63,.96,0,.83,.35,.2,.85,0,.85,.78,.04,.67,.15,0,.65,.72,0,.36,.53,0,.01,0,0,.5,.08,0,.98,0,0,.01,0,.27,.11,.82,.32,.49,.12,0,.04,.1,0,0,0,0,.39,.32,.68,.04,.87,.02,.08,0,0,.04,.83,.58,.13,.11,.25,0,.04,0,0,0,.01,0,.31,.71,.02,.62,0,.04,0,0,.05,1,0,0,0,.02,.94,.65,0,.18,.78,.21,0,.5,.22,0,0,.02,.02,0,0,.62,0,0,0,.02,.02,.57,.06,0,.07,0,0,.41,.06,0,.03,.89,.01,0,.53,.05,.06,.98,0,.24,0,0,.66,.25,0,0,0,0,.34,0,0,0,0,.05,.11,0,.77,0,.01,0,0,.31,.1,0,0,0,0,.11,.03,0,0,0,.66,0,.05,0,.98,0,0,0,0,.21,0,.81,.07,0,0,.01,.76,0,0,0,0,.07,0,0,0,0,.67,.25,.44,0,.57,0,.44,.15,0,.5,0,0,.03,0,0,.2,.36,0,0,0,0,.14,.04,0,.01,0,0,.07,0,.28,0,.13,0,.07,.39,.91,.2,.6,0,0,.28,0,.1,.01,.55,.95,0,0,0,0,0,.93,0,.76,.32,.03,.72,.49,0,0,0,.33,0,.87,.45,.03,.23,0,.12,.39,0,0,0,0,.43,0,.03,0,.02,0,0,0,0,0,.19,0,.35,0,0,.41,0,.97,.03,0,.24,.17,0,.04,.85,.74,.48,.5,.34,.79,0,0,0,.04,0,0,0,0,0,0,.82,.68,.27,0,.74,.01,.54,.19,.18,.9,0,0,0,.44,0,0,.49,0,.85,0,0,0,.01,.04,.8,.33,.66,.24,0,0,0,.09,0,.13,0,.4,.88,.07,.56,0,.08,0,0,0,0,.82,0,0,0,.01,.1,.72,0,0,.06,.07,0,.62,.06,.83,.94,.03,.33,0,0,.2,0,0,.85,0,.03,0,0,.76,0,0,0,0,.1,0,0,0,0,0,0,0,0,0,0,.01,0,.09,0,0,0,.5,.21,.15,.34,0,.6,0,.87,0,0,0,0,0,0,0,.84,0,.82,.02,0,.67,.37,.54,0,0,0,0,.17,0,.02,0,.43,.83,.51,.96,.23,.74,0,0,.57,.03,0,.18,0,0,.33,.05,.6,.55,.2,0,.4,.88,0,.09,0,0,0,0,.01,.62,0,.04,.36,0,0,.16,.04,0,.25,0,.82,0,.81,0,0,.85,0,.09,.12,.96,0,.04,.18,0,0,0,0,.05,.29,0,.01,0,.07,.82,.19,0,0,.84,0,0,0,0,.31,0,0,.39,.58,.01,0,0,.44,.06,0,0,.89,.49,0,0,.64,0,.81,.28,0,.53,.6,.15,0,0,0,.59,.77,.4,.8,0,.02,.91,.56,.07,.86,0,0,0,.64,0,0,0,0,0,.97,.78,0,0,.65,.22,.73,.92,.32,0,0,.02,0,.04,.38,0,.03,.01,.78,.98,0,.15,.13,.28,0,0,0,0,0,.83,0,.59,.04,.23,.37,.43,0,0,.07,.02,0,.01,0,0,0,.04,0,.02,.37,0,0,0,0,0,.15,0,.74,0,0,.05,0,0,0,0,0,0,0,.99,0,0,0,.65,0,0,0,0,0,.01,0,0,.47,0,0,.38,0,0,.79,0,0,0,0,.27,.95,.9,.32,0,.33,0,0,0,.72,.09,.36,.01,.61,.02,0,.92,.68,0,.16,.25,0];export{a as pvalData};
