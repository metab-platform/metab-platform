const a=[0,.12,.18,.17,.01,.98,.03,0,0,.45,0,0,.06,.01,0,.13,.75,.82,.64,.83,.99,.01,.91,.01,0,0,0,.61,.02,.01,0,.05,0,.01,.46,.23,.02,0,.01,.01,.19,0,.35,.01,.08,0,.47,.22,.86,0,.02,.01,.2,0,.02,0,0,.38,.31,0,.07,0,0,.44,.12,0,0,0,.79,.72,.98,.36,0,.03,0,.75,.88,.14,.16,0,.18,0,.3,0,0,.3,0,.01,0,0,.27,.39,0,0,.21,0,0,0,.06,0,.67,0,0,.96,0,0,.03,0,0,0,.54,0,.04,0,.06,0,.21,0,.78,0,.02,.79,.77,.14,.29,0,.13,.25,0,0,.01,.78,.41,.02,.19,.81,.33,0,0,.01,0,.14,0,0,.13,.65,.69,.05,0,.57,0,0,.67,.3,0,.23,.52,0,.03,0,.97,0,.06,.01,0,.03,.32,0,.3,0,.05,0,.61,.74,0,.01,.99,.28,.01,0,.13,.93,.14,.18,0,0,.32,0,.47,0,.09,.01,.22,0,0,.05,0,.76,.14,0,0,0,0,.2,.25,.1,.2,0,0,.04,.04,0,0,0,.32,.03,.42,0,0,.38,0,0,.1,0,0,0,.05,0,.49,.04,.52,.37,0,.21,.01,.12,.01,.01,.39,.38,.17,0,0,.7,0,.3,.6,.08,.95,.19,.39,.38,.01,.05,0,0,.39,0,.56,.39,.19,.14,0,0,.16,0,.26,0,.14,0,.01,0,0,.06,0,.11,.05,.04,0,.94,.04,.72,0,.38,0,0,.99,0,.25,.14,.01,0,0,.17,0,.39,.02,0,.56,.02,.32,.08,0,.52,.32,0,.14,0,.66,.01,0,.96,.43,.12,.31,.02,.04,.73,.17,.07,0,.03,0,0,.1,0,0,.07,.06,0,.28,0,.02,.03,0,.29,0,0,.3,.56,0,.74,.5,.89,0,.03,.28,.07,.21,0,0,.58,.29,0,.11,0,.11,.45,.01,.25,0,.12,0,0,.64,.09,.34,0,.35,.41,.76,.48,0,.07,.59,.07,.31,0,.74,.6,.88,.97,.73,.38,1,0,.01,.35,0,0,.01,.01,.75,.03,.02,.06,0,.56,.03,.09,0,.03,.03,0,.07,.84,0,.03,0,.01,.05,.01,.04,0,.22,.07,0,.01,.05,.11,.52,0,0,.01,0,0,0,.21,0,.46,0,.15,0,.45,.29,0,.86,0,0,.01,0,0,0,.06,.04,.02,.04,0,0,0,0,0,0,.11,.27,.33,.47,.01,.95,0,.01,0,.01,.03,.35,.22,.28,.91,0,0,0,.01,.47,.02,.23,0,0,0,.15,.28,0,0,.26,0,.23,.01,.01,.18,.21,.42,.51,0,0,.05,.25,0,.13,.34,.05,.83,.04,.28,0,0,0,1,.02,0,0,.96,0,.08,0,.43,.15,.02,.01,0,.02,0,.01,.14,.59,.98,.54,.02,.22,.1,.03,0,0,.09,.28,.43,.04,.41,.24,.02,.38,.41,.88,1,.07,.53,.01,.33,.57,.53,0,.18,.3,0,.01,.48,0,.45,.01,.41,.04,.75,.14,.03,0,0,.42,.3,.35,.55,.07,.81,.06,.15,0,.58,0,.05,.66,.05,.01,.07,0,.03,0,.01,0,0,.02,.01,0,.01,.17,.42,.36,.03,0,0,0,.02,.59,.14,.14,0,.19,.35,.27,.01,.74,.26,.03,.31,.59,.02,.38,.06,.17,.87,.04,.37,.63,0,.07,.68,.01,.4,.02,0,0,.21,0,.15,.16,.94,.38,.04,.12,0,0,.21,.38,.41,.74,0,0,.23,.77,0,.46,0,0,0,0,0,0,.01,0,.9,.01,.58,.45,.05,.12,.2,0,.06,.96,.03,.8,.01,0,0,0,.01,.44,.01,.07,.06,0,0,.01,.62,.28,.42,.19,0,.7,.79,.05,0,0,.05,.46,.03,.23,.01,.02,0,.03,.95,0,0,0,0,0,.01,.17,.48,.01,.07,.12,.11,0,.36,.61,.01,.9,.28,0,.3,.67,.55,0,0,.03,.55,0,.12,.23,.01,0,.06,0,.26,0,.52,0,.18,0,.48,.61,.25,0,.42,.07,.34,.12,.03,0,.01,.02,0,0,.57,0,.01,.01,.01,.12,.09,.02,.14,.2,0,0,.11,.65,0,0,.23,.54,.41,.08,.89,.02,.07,.26,0,0,0,.01,.89,.02,.47,.04,0,.24,0,0,.2,.73,.38,.02,.08,0,0,0,0,.02,0,.91,0,0,.15,.64,0,.49,0,0,0,.13,.73,.49,.01,0,.01,0,.02,.26,.28,.91,0,0,0,0,0,.09,0,.99,.5,.95,.99,.65,0,.79,.1,.98,.74,.94,0,.3,.08,.22,0,0,.01,.04,.02,0,.03,0,.85,.41,0,0,.72,.22,.04,.04,.43,0,.76,0,0,.04,.37,.31,.21,.05,.1,0,.01,.39,.3,.2,.27,.89,.33,.07,0,.97,.19,.01,0,.22,0,0,.1,.29,0,.03,.04,0,.95,.51,0,.07,.32,0,.93,.23,0,0,.67,.5,.14,.03,0,.91,.06,0,0,.04,.34,0,.27,0,.03,.02,.11,.02,.84,.89,.59,.89,.02,.01,.02,.02,.01,0,.27,.05,.51,.01,0,0,.02,0,.82,.08,0,0,.45,.63,0,.95,.79,0,.08,.32,.21,0,.34,0,.45,0,.01,0,.56,0,.1,0,.13,.25,.3,0,.83,.89,.65,.1,.45,.89,.02,.02,.01,0,.01,.01,.06,.01,0,0,.05,0,0,.01,0,.2,.03,.01,.12,0,.41,0,.24,.57,.04,.72,.59,.3,.14,.6,.35,.13,.03,.25,.96,0,.51,.22,0,.97,0,0,.96,.05,.28,0,.21,.2,.68,0,.75,.01,0,.81,0,0,.37,.06,.87,.16,.4,.86,0,.03,0,0,0,.07,.2,.34,.02,.07,.83,.05,.27,.04,.29,.01,.14,.06,0,.92,.01,0,.49,.01,.16,.78,0,.85,0,.01,0,.33,0,0,0,.46,.77,0,.1,.46,.13,.94,0,.02,.17,.13,0,.11,.3,.52,.64,.06,.49,.15,.31,.04,0,.02,.12,0,.09,.56,0,0,0,0,0,.04,.87,.44,0,.01,0,.15,.13,0,.71,.16,.03,0,.65,.03,.94,.81,0,.03,0,.01,0,0,.12,.84,.48,.8,0,.04,.99,.55,0,0,.46,.52,.04,0,.46,.21,.75,0,0,.09,.22,0,.1,0,.38,.03,.97,.72,.08,.48,0,.09,.16,.11,.01,.07,.03,0,0,.01,0,0,.53,0,0,0,0,.16,0,0,0,0,.44,0,.76,0,.03,.27,.54,.95,.34,.38,.03,0,0,.94,.23,.09,.25,.83,.02,0,.04,.04,0,.01,0,0,0,0,0,0,0,.93,.51,.14,.02,.11,0,.9,.59,0,.11,.02,0,.04,.31,.21,0,0,.13,.24,.11,.29,.39,.86,.01,0,.09,0,.72,.07,0,0,.97,.01,.08,0,0,.01,.79,.18,.07,0,.17,0,.04,0,.36,.29,.03,.08,0,0,.37,0,0,0,.01,0,.21,.81,.22,0,0,0,0,0,.7,0,.02,.07,.26,.01,0,.14,.78,0,.17,0,0,0,.04,.04,.93,.5,.07,.03,0,0,0,.02,0,.2,.01,0,0,0,0,0,0,.79,0,.22,.81,0,.1,0,.04,.02,0,.05,.89,.29,0,0,.09,0,.01,.3,.05,.44,.08,.34,0,.01,.34,.87,.01,.51,0,.34,.96,.43,.36,.8,0,0,.03,0,0,0,.02,.84,0,.03,.06,0,0,0,0,0,0,.03,0,.58,0,0,0,0,.07,.44,.01,0,0,.79,.99,.02,0,0,.01,0,.99,.85,.18,.28,.77,.36,.49,.21,.25,.03,.43,0,.3,0,0,.94,0,0,0,0,.9,.2,.21,.06,.52,.06,.17,.01,.07,0,0,0,0,0,.02,0,.02,.8,.02,.43,0,.51,.18,.34,.63,0,.49,.63,.03,.66,.29,.03,.49,.6,0,.29,.59,0,.76,0,0,.12,0,.02,.06,.35,.01,.36,0,.07,0,.59,.22,.12,0,0,.79,.39,0,0,0,0,.06,.72,.02,.28,.13,.55,0,0,0,.24,.55,.51,0,.02,.41,.94,.07,0,0,0,0,0,.22,0,0,.67,0,.16,0,0,.33,.37,0,.52,0,0,.02,.24,.01,.23,.05,.22,0,.29,.24,0,0,.09,0,0,0,.99,0,0,0,.64,0,.09,.03,0,.7,.02,0,.76,.71,0,.15,.1,.62,0,.09,.89,0,.37,0,0,0,0,.95,.91,0,0,.07,0,.02,.03,0,0,0,.36,.01,0,.04,0,0,0,0,.02,.88,0,.7,0,0,.65,0,0,0,0,.01,0,.05,0,.34,0,.04,0,0,.13,0,0,0,0,0,.43,.46,0,.01,0,0,0,.33,.08,0,0,.46,.24,0,0,0,.04,0,.1,0,.95,.02,.02,0,0,.08,.93,.76,.56,0,0,.12,.37,0,0,0,.01,0,0,0,.37,0,.75,0,0,.03,.65,.65,.05,0,.17,.03,0,.63,0,.5,.05,0,0,0,0,0,.72,0,.66,.02,0,.67,.54,0,0,0,.03,.01,.33,.62,.01,.06,0,.09,.1,.02,.16,0,.01,.5,.1,0,0,0,0,0,0,.7,0,.31,0,.01,.31,0,.45,0,.39,0,0,.01,.16,.02,.02,0,.48,0,0,.2,.69,0,.04,0,.43,0,.01,0,0,0,0,.52,.89,.73,0,.73,.2,.83,.09,.07,.03,.04,.37,.26,.66,0,.07,.04,0,.35,.01,0,0,0,.69,.72,.14,0,.21,.33,.05,0,.23,0,0,0,.05,.01,.37,.24,0,.01,.1,0,.03,.05,.92,0,0,0,0,.94,.28,0,.17,.59,0,.08,.9,.1,.04,.35,.18,.02,0,0,.28,0,.04,.12,.1,.06,0,.01,.04,0,.02,0,.46,.11,0,.15,0,0,.01,.64,0,.02,0,0,0,0,.83,0,0,.02,.1,0,0,.17,0,.01,0,.41,0,.03,0,.18,.01,0,.04,.96,0,.83,.01,.01,.89,.59,.23,0,0,0,0,.44,.41,.06,.16,.36,.03,.66,.71,.11,.07,.01,.03,0,.16,0,.15,.01,1,.95,0,.31,.63,.02,0,.38,.63,0,.72,.04,0,.91,.05,0,.54,0,.17,.71,0,0,.02,.18,0,.38,0,.4,0,0,0,0,.53,0,.12,.1,.08,.03,.38,.05,0,0,.02,.11,.07,.51,0,0,.04,.24,.54,.7,0,.24,.42,0,0,0,.96,.65,0,0,0,.25,0,0,0,0,.86,.03,0,.55,.05,.03,.05,.12,0,.07,.41,0,.26,.01,.22,0,0,.01,.23,.96,.08,.28,0,.01,.03,.17,.77,.66,.01,0,.74,.01,.52,.08,0,0,0,0,.99,0,0,.25,.22,.39,.72,.68,0,0,.15,0,.91,.07,.05,.01,0,0,.15,0,0,.1,.7,0,.03,0,.02,0,.51,0,.36,.9,.01,.01,.14,0,0,.02,.89,0,0,.02,.27,.06,.73,0,.06,.06,0,0,0,.02,0,.01,0,.14,0,.09,0,0,.87,0,.01,0,0,.04,0,0,.63,.13,.13,0,0,0,0,0,.33,0,0,.06,0,0,.1,.07,.79,.79,0,.01,0,0,.03,.48,.01,.7,.01,.03,.02,0,0,.59,0,.77,.01,.7,.02,0,.04,.48,0,.12,.07,0];export{a as pvalData};
