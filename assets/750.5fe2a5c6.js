const a=[.41,.05,0,.88,0,.02,.25,0,.06,0,.66,.74,.33,0,.36,.26,.24,.9,.02,.34,.39,0,.04,.19,.02,0,0,.51,.01,0,0,0,0,0,.05,.07,0,.94,.08,.01,.53,0,0,.69,.07,.56,.01,.02,0,0,.1,.24,.49,0,0,.26,.39,0,0,0,0,0,0,.44,.35,0,0,.51,.23,.89,.61,.06,0,.02,0,.79,.04,0,.1,0,0,0,.41,0,.02,0,0,.92,0,.01,0,.31,0,.07,.51,.7,0,.07,.32,0,.82,0,0,.85,0,.74,0,0,0,0,.35,0,.99,0,.04,0,.77,0,0,0,1,.01,0,.9,0,0,0,.5,0,0,0,.28,.44,0,.45,.59,0,.01,0,.16,0,.02,0,0,.04,.49,.61,.21,0,.25,0,0,.31,.72,0,0,.72,.9,.17,.82,0,0,.17,0,0,0,0,0,.01,0,.11,0,0,.06,0,0,.69,0,0,0,.06,.87,.2,.1,0,.39,.78,.07,0,.15,.85,0,.77,0,0,0,0,0,.52,0,.29,0,0,.47,0,0,.07,0,0,.98,0,.59,.57,.03,0,0,.64,0,0,0,0,0,0,0,0,0,0,0,0,0,.84,.96,.67,0,.98,.03,.73,.59,.1,.76,0,.69,0,0,0,.03,.75,.03,.15,.83,0,.01,0,.02,0,.05,.77,0,.1,.01,.43,.01,0,0,.04,0,.01,0,.82,0,0,.14,0,0,0,.74,0,0,0,0,0,0,.03,.01,0,0,0,0,0,0,.13,0,0,.06,0,0,.64,.01,.01,0,.34,0,0,.39,.18,0,.08,0,0,.84,0,.87,.05,.05,.16,0,0,0,0,0,0,.12,.74,0,0,0,0,.99,.28,0,0,0,.28,.63,0,.48,0,0,.46,0,0,0,.02,.48,.01,0,.68,0,0,0,0,0,.11,0,0,.15,0,.22,0,0,0,.01,0,0,.24,.02,0,0,0,.49,0,.19,.1,.03,0,0,.15,0,.82,0,.54,.98,.9,.12,.78,.01,.09,.46,0,0,0,.32,.59,.08,.2,0,0,.61,.47,.01,0,.03,0,0,0,.69,.79,0,0,0,0,0,1,0,.06,.57,0,.01,0,.01,.01,0,.02,.75,.01,0,0,.8,0,.78,.01,.06,0,.06,0,0,.72,0,0,0,0,0,0,.33,0,0,0,0,.04,0,0,0,0,.38,.35,.13,0,0,0,0,0,0,0,0,.17,.91,.01,.58,0,0,0,0,0,.47,0,0,0,0,0,0,0,.09,0,0,0,.14,0,.06,.1,.01,.37,.74,.17,.38,0,0,0,.03,0,.01,0,.16,0,0,0,.83,.12,0,.01,0,0,.05,0,.02,0,0,0,0,0,0,.12,0,.84,.91,0,.24,.55,0,.3,0,0,0,.61,0,.2,0,0,.44,.02,.85,.74,0,.04,0,0,.27,.01,0,0,.07,0,0,0,0,0,.18,0,.02,0,.74,0,0,0,0,.8,.41,.91,.45,0,.57,0,0,0,.31,0,0,.07,0,0,.52,0,.08,0,.02,0,.31,0,0,.01,.01,.4,.62,.17,0,0,0,0,0,0,.01,0,0,0,0,0,0,0,0,.37,.24,.76,.02,.62,0,.65,.56,0,.02,.07,.3,.02,.04,0,.46,0,.03,0,0,0,.15,.03,0,.01,0,.13,0,0,0,.04,0,0,0,0,.81,.26,0,.02,0,.36,0,.25,0,0,0,0,.41,.92,.35,.38,.28,0,0,0,0,.37,.57,.86,.03,0,0,0,.73,.35,0,0,.01,0,0,.02,.01,.35,.13,.01,0,0,0,0,0,0,.02,.8,.69,.04,.07,.03,.53,.01,.02,0,0,0,0,0,0,.54,.08,.35,.06,.4,0,0,.01,0,.01,.86,.46,.31,.44,.31,.11,0,0,.01,.53,0,.05,.02,0,.05,0,0,0,0,.23,0,0,.01,.28,.84,.77,.9,.01,0,0,.63,.28,0,.03,.02,0,.54,0,0,0,0,.47,.03,.29,0,.26,.17,0,0,0,.57,.01,0,.23,.02,.01,0,0,0,.01,0,.04,0,0,0,0,0,0,.59,0,0,0,0,0,.52,0,0,.06,0,.27,0,0,0,0,.03,0,.71,.04,0,0,.01,0,0,.02,0,.11,.8,.46,0,0,0,0,0,0,.64,0,.62,.03,0,.01,.27,0,.08,0,.06,.42,.14,0,0,.09,.59,0,.85,0,.01,0,0,0,.81,0,0,0,0,0,0,.46,.47,0,0,.76,.42,.14,0,0,0,0,0,0,.14,.07,.04,0,0,.08,0,.01,.42,.2,.96,0,0,0,.13,.01,.08,0,0,0,.33,0,.04,.18,0,.06,0,.01,0,.01,0,0,0,.56,.01,.74,0,0,.18,.05,.93,.63,.27,0,.09,0,.4,0,.08,0,0,.01,0,0,.42,0,0,.42,0,.08,.12,.01,0,0,.03,0,0,0,0,0,.09,0,0,0,0,.32,0,0,.35,.68,.01,0,.03,.55,0,0,.71,.88,0,.88,.3,.04,0,.26,0,.55,0,.55,0,.82,.01,.61,0,.22,.49,.01,0,.45,0,.54,.33,0,0,.13,.04,0,0,0,0,0,0,0,0,.01,.2,.14,.39,0,0,0,0,.01,.45,0,.8,.08,.08,.29,.82,.87,.51,.56,.59,0,.62,.05,.12,.7,.01,0,0,0,.01,.83,0,.88,.09,.62,0,.92,0,0,.41,0,0,.08,.06,.7,0,.27,.04,0,.52,0,0,0,.73,.79,.12,0,0,.66,.57,0,.84,.2,.14,0,0,0,.04,.01,.26,.11,.02,.34,0,0,0,.75,.09,.01,0,0,0,.08,.01,.88,0,0,0,0,.31,0,.01,.08,0,0,.07,0,.2,.56,0,.05,.12,.27,0,0,.86,.91,0,0,.02,0,0,.11,0,0,.01,0,0,0,0,0,0,.66,0,.95,.01,0,0,.33,0,0,.26,.01,0,0,.03,.94,.03,.37,0,.7,.83,.61,0,.03,0,0,0,.3,.59,0,0,0,.01,.28,0,.02,.55,0,0,.05,0,.41,0,.69,.04,.36,0,0,.71,0,.08,0,.01,.15,0,0,.62,0,0,.01,0,0,0,0,0,.47,0,0,0,1,.03,.83,0,.69,0,.13,.84,.01,0,.12,0,.02,.82,.01,.3,.04,.35,.5,0,.98,.18,0,0,0,0,0,.39,0,0,0,.54,0,0,0,0,.46,.05,.01,.1,0,.81,0,0,0,.43,0,.06,.04,.03,0,.7,0,0,0,0,.06,0,.3,0,0,0,.32,.6,.04,.01,0,0,.71,.03,.78,.39,.02,0,.02,0,.92,.06,0,.33,.1,0,0,.01,0,0,0,.02,.04,0,0,0,0,0,.66,0,.32,0,.01,0,.03,.01,.05,.01,.76,0,.04,.08,0,.03,.3,0,.12,.3,.12,.06,0,0,0,.06,0,.05,0,0,0,0,0,.05,.56,.11,.89,0,0,0,.03,0,0,0,0,.84,.74,0,.01,0,.01,0,.46,.14,.9,0,.04,0,0,0,0,.02,0,.01,0,.27,.72,0,.36,.45,0,0,.33,.31,.45,.09,.07,.15,0,.73,.4,0,0,0,0,.15,0,0,0,.12,0,0,0,.3,.7,.63,.26,0,0,.77,0,0,.25,.01,0,0,.12,.81,.92,.01,.45,.02,.67,.16,.33,0,.01,.53,.15,0,0,0,0,0,0,0,.16,0,.04,0,.08,0,.68,.05,0,0,.67,.02,0,0,.42,0,0,0,.01,.18,.06,.13,0,.07,.97,.65,.14,.72,0,.17,.69,0,.19,.06,0,.66,0,0,0,0,0,.34,.38,0,.45,0,.83,.13,0,.15,.05,.91,.07,.88,.09,.07,.91,.69,0,0,0,0,0,0,.57,.04,0,.46,0,0,0,.01,.65,.51,.04,0,.05,.19,0,0,.04,0,0,0,.85,0,.01,.96,0,.04,0,0,.89,.49,0,.05,0,0,0,.24,0,.49,.73,.05,0,.41,0,0,0,.01,0,0,0,.01,.06,0,.05,.19,0,.87,.8,0,.97,0,.68,0,0,0,0,.01,.01,0,.26,.38,0,.01,0,0,.01,0,.28,0,0,0,0,0,0,0,0,0,.01,.03,0,0,.27,0,.37,0,0,.1,0,0,.71,0,0,.51,.01,0,0,0,0,0,0,.52,.73,0,0,0,0,.02,0,0,0,0,.93,.06,.74,0,0,0,0,0,.17,0,0,0,0,0,0,0,0,.03,0,.16,.02,.59,0,0,0,0,0,.11,.31,.01,0,0,0,.98,.31,0,0,0,0,0,0,.15,0,.11,0,.54,0,.95,.6,.98,0,0,.06,0,.01,0,.93,0,0,0,0,0,0,0,.03,.01,0,.26,.76,.29,0,0,0,.09,0,.01,.04,0,0,0,0,.55,0,0,0,0,0,0,0,0,0,.03,0,.3,.83,0,.09,0,.08,0,0,.48,0,.05,0,.19,0,.08,.71,0,0,.18,0,.03,.19,.84,0,0,.61,0,0,.59,.83,0,0,0,.62,.41,.03,0,.57,0,.11,0,0,0,0,0,.36,.03,0,0,0,0,0,0,0,0,.07,0,.38,.3,.1,0,0,0,0,.04,0,0,0,.05,.18,.76,.36,0,.04,0,0,0,0,.24,0,.09,0,0,.94,.39,.03,0,.57,0,0,.04,.11,.09,.76,.42,.78,0,0,.94,0,0,.66,0,.46,0,0,.49,0,0,0,.05,.22,.01,0,0,0,0,0,0,0,0,0,0,0,.02,0,0,0,0,0,0,.4,0,.51,0,.84,0,0,0,0,0,0,0,.91,0,.85,0,0,0,.6,0,0,.01,0,0,0,0,0,0,.95,.75,.6,.24,.02,.06,.16,.04,.01,.22,0,.37,0,.7,0,.01,.45,.06,.26,0,.93,0,.07,0,0,0,.61,.29,.16,.43,0,.1,0,0,0,.22,.52,0,.85,0,.49,0,0,0,0,.67,.32,.02,.08,.74,.07,.01,.37,0,0,0,.02,.17,.01,0,0,0,.01,.47,.55,0,0,.15,.01,0,.01,0,.21,0,0,0,0,0,0,0,.4,0,0,.49,.71,.89,0,.09,.11,0,0,.54,0,.08,.9,.47,0,0,.48,0,.68,.43,.54,.15,0,.47,.93,0,.02,0,0,0,0,.01,.02,0,0,0,.36,0,0,0,0,.11,.57,.6,.1,0,0,.27,0,.02,.47,0,.01,0,.03,.05,0,.24,0,.88,0,0,0,0,0,.7,0,.81,.03,.34,.01,.06,0,0,0,.01,0,0,.09,.11,0,0,0,0,.71,0,0,0,0,0,.85,0,0,0,0,0,0,0,0,0,0,0,.04,.01,0,.08,0,.09,0,0,0,0,0,.21,0,.35,.02,0,0,.03,0,.39,.81,0,0,0,0,.03,.67,0,0,0,.01,0,0,0,.53,0,.16,0,0,.08,0,.02,.01,0,.01,.92,0];export{a as pvalData};
