const a=[.38,.01,0,.97,0,0,0,.18,0,.43,.01,.12,.13,0,0,.77,.02,.39,.32,.15,.56,.08,.94,.04,0,0,.29,.06,.33,.17,0,.64,0,.91,.04,.13,0,0,0,0,.18,0,.01,.33,.43,.01,.63,.39,.04,0,.08,.19,.17,0,0,.01,0,.02,.06,0,0,0,0,.19,.52,.03,0,0,.82,.44,.79,.42,0,0,0,.79,.17,0,0,.21,.01,0,.81,0,.96,.14,0,.09,0,0,0,.29,0,0,.02,.08,0,.08,.6,0,.17,0,0,.02,0,.61,.23,.79,0,0,.93,0,.05,0,.08,0,.33,.01,.23,0,.39,.2,.06,.61,.08,0,0,.3,0,0,.08,.61,.96,.04,.88,.06,.16,.04,.07,.59,0,.63,0,0,.21,.55,.89,.32,0,.94,0,.11,.55,.83,.08,0,.04,.28,.1,0,.56,0,.03,.03,0,0,.12,.01,.01,0,.06,0,.64,.11,0,.1,.15,.42,.03,0,.19,.56,.55,0,0,.67,.13,.49,.56,.81,.89,0,.79,0,0,0,0,0,.52,.23,.02,0,0,.52,0,0,.01,0,0,.74,.88,0,.65,0,.04,.73,.07,.29,.03,.13,0,0,0,0,0,0,.1,.07,0,.03,.96,.2,0,0,.85,.07,.01,.97,.07,.59,.07,0,.34,.62,.03,.62,.04,.29,.88,.73,.01,.06,0,.02,0,.51,.4,0,.12,0,.86,.06,0,0,.76,0,.03,0,.67,0,.17,.78,0,0,0,.95,.77,0,0,.04,.02,.01,0,0,0,0,.04,0,0,.64,.24,.01,0,.95,0,.01,.97,.56,.23,.03,.98,0,.7,.19,.05,.16,.02,0,.01,.7,0,.02,.47,.48,0,.02,0,.02,0,.34,0,.05,0,0,.1,0,0,.12,.53,0,0,0,.13,.33,0,.29,0,0,.01,.88,0,.02,.95,.89,0,0,.66,0,.07,.01,0,.31,.05,0,0,0,0,.14,0,0,0,.43,0,.92,.5,0,.02,0,.02,.12,.58,.01,0,.01,.03,0,.76,0,.45,0,.29,.15,.69,.66,.05,0,.12,.35,0,0,0,.17,.97,.02,0,0,.01,.03,.18,.14,.62,0,0,0,.11,.99,0,0,0,0,0,0,.46,0,0,1,0,0,.01,0,.06,0,.09,.21,.01,0,0,.98,.03,.19,.49,.01,0,.4,.05,0,.07,0,0,0,0,0,0,.48,.1,0,0,0,.15,0,0,0,0,.01,.33,.97,.24,0,0,.06,0,0,0,0,.5,0,.01,.28,0,0,.71,0,0,.79,0,0,0,.01,0,.08,0,0,0,0,.35,0,0,.01,.69,0,.01,.1,.02,.01,0,0,.01,.03,0,.37,0,.56,0,0,0,.29,.34,0,0,.01,0,0,0,.41,.18,0,.24,0,0,0,.11,0,0,.81,.01,.11,.72,.13,.64,0,0,.01,.09,.69,.08,.04,0,0,.99,.05,.91,0,.33,.99,.19,.93,.74,.71,0,.6,.01,0,0,0,.01,.42,0,.02,.01,.64,0,.5,.02,.25,.12,.06,.83,.31,.1,.03,0,0,.03,.07,0,0,.14,.03,.11,.47,.09,.05,0,0,0,0,0,0,.02,0,.19,.34,.57,0,.38,0,0,0,0,.49,0,0,0,0,.05,.16,.04,.73,.54,.56,.47,0,.2,0,.17,.12,0,.92,.15,.51,.21,.07,0,.96,0,.74,.78,.01,0,.23,.72,0,0,0,0,0,0,.57,.67,.53,.19,0,.01,.05,0,0,.84,0,.43,0,.97,0,.22,0,0,.12,0,.15,.02,.48,0,0,0,.01,.03,.02,.3,0,0,0,0,.84,.05,.11,0,.52,0,0,.02,.55,.74,.33,.52,0,.01,.02,0,0,0,.09,.18,.03,.16,.06,.71,.08,.13,0,0,.01,0,.02,0,0,.7,.32,.08,0,.81,.45,0,.42,.29,.01,.47,.41,.02,.05,.03,.43,0,0,0,.19,0,.29,.4,0,.52,0,0,0,0,.47,0,.11,0,.76,.01,.09,0,0,.12,.72,.34,.13,0,0,.01,0,.91,.23,.66,.21,0,.13,.09,.24,0,.86,.27,.01,0,0,.17,0,0,.15,.19,.02,.74,.09,0,.07,0,.62,0,.27,0,0,0,.12,.86,0,0,0,0,0,0,.6,.07,.02,0,0,0,0,0,0,.03,0,.34,0,0,0,0,0,0,.09,.01,.61,.65,.02,0,.19,0,.72,0,0,.88,0,.47,0,.4,0,.1,0,.84,0,.15,.99,.36,0,.02,.34,.84,.68,.72,0,0,.06,0,0,.03,.73,.11,0,.54,.28,0,.51,.93,.12,0,.67,.37,.01,.01,.03,0,.06,0,0,.27,0,.16,.48,.01,.01,.82,.74,.4,.46,.81,0,.2,.01,.4,.06,.63,.07,.24,0,.92,0,0,.82,0,0,0,.47,0,0,0,0,0,.21,0,0,0,0,0,.95,.65,.25,.3,0,.19,.01,.58,.15,.85,.77,.04,.01,0,.01,.41,.05,.94,.07,.16,.59,0,0,0,0,.06,0,0,.01,0,0,0,0,0,0,0,.82,0,0,.79,.01,.04,0,.4,.04,.3,0,.99,.3,.27,.2,0,.09,.15,.86,0,.43,0,.01,0,.35,.32,.5,0,.86,.87,.17,0,.63,0,.3,0,0,0,.49,0,0,.09,0,0,.87,.02,.16,.01,.35,.4,.28,.13,0,0,.71,0,.56,.2,.13,.12,.21,.77,.07,.16,.77,.79,.83,.37,.27,.9,.69,.33,.25,.73,0,0,.22,.01,.04,0,.83,.33,.36,0,.2,.02,0,.39,.01,0,.2,.17,.08,.61,.42,.02,0,.36,0,0,.43,.01,.59,.8,0,.23,.28,.74,0,.55,.08,.03,0,.03,0,0,0,.01,.83,.03,.04,.2,0,.05,.48,0,0,.08,0,.02,0,0,.42,0,0,0,0,.15,0,0,.01,0,0,.21,.54,.78,.63,0,.08,.65,.01,.08,0,.52,.09,0,.5,0,0,.41,0,0,0,.1,0,.33,0,0,0,.18,.12,0,.17,.07,.01,0,.3,0,.07,.86,0,0,0,.05,0,.42,.72,.01,.74,.58,0,.01,.73,.89,0,0,0,0,0,0,.78,.04,.16,0,.2,.3,.31,0,.23,0,.01,0,0,.89,.83,0,0,.95,0,.41,.03,.04,.46,0,.02,.56,.11,0,.67,0,0,0,.01,.01,.37,.01,0,0,.45,0,.6,0,.44,.45,.81,.18,.95,0,.24,0,0,.13,0,.42,.73,.53,.12,0,.52,.11,0,0,0,.1,0,.46,0,0,0,.19,0,0,.13,0,.55,.01,.28,0,0,.94,0,0,.9,.99,0,0,.26,.1,0,.49,.03,0,.05,.01,.51,0,.12,0,0,0,.97,.43,.33,0,0,0,.26,.15,.39,.96,.46,0,.25,0,.89,.33,.02,.11,.04,0,0,.3,0,0,0,.15,.22,.19,0,.04,.01,0,.28,0,.48,0,.11,.03,.57,.11,.81,.82,.17,0,.02,0,0,.03,.28,0,.64,.89,.21,.79,0,0,0,.74,0,.04,0,.02,0,0,0,.69,.22,.32,0,.01,.81,0,.83,0,0,0,0,.04,.07,.01,0,0,.78,0,0,.01,0,0,.18,0,0,0,.01,.93,0,.57,.06,.8,.58,.66,.8,.94,0,0,0,.68,.04,0,.91,.68,0,.49,.03,0,0,0,0,.42,0,.01,0,.04,0,0,0,.17,0,.28,0,0,0,.76,.88,.01,0,0,0,0,.12,.93,.21,0,.62,.63,.29,.06,.22,.07,0,.3,.77,0,0,0,0,0,0,0,.01,.42,.26,0,0,.2,.02,.02,0,0,0,.06,0,0,.72,0,0,0,0,.63,0,.31,.45,0,.61,0,.05,.32,.49,.01,.3,.01,.04,.48,0,.33,.3,0,0,0,0,.49,.84,0,.55,0,0,.26,0,.2,0,.45,.51,.15,0,.03,.01,.05,0,0,0,0,.09,.51,.53,.91,.11,0,.24,0,0,.64,.09,0,0,0,.85,.65,.29,0,.37,0,0,0,.1,0,0,.26,0,0,0,0,.11,.95,0,.37,0,0,.06,.17,.01,.63,.35,.47,0,.11,.25,0,0,.02,0,0,0,.26,0,0,.49,.12,0,.45,.47,0,.09,0,0,.02,0,0,0,.43,.39,0,.94,.22,.04,.26,0,0,0,0,.11,0,0,0,0,0,0,0,0,0,0,.52,.01,0,.89,0,.42,0,0,.6,0,0,.2,0,.03,.1,.29,0,0,0,.12,0,.02,0,.77,0,0,0,0,.1,0,0,.01,0,0,.05,.22,0,0,0,0,0,.84,0,0,0,.33,.33,0,.38,.51,0,.07,.19,0,0,0,0,0,0,0,.26,.95,0,0,0,0,.17,.77,0,0,0,0,0,0,.46,0,.02,0,.53,0,.16,.54,.64,0,0,.02,0,.64,0,.04,.18,0,0,0,0,0,.07,.16,.16,.01,0,.1,.01,0,0,0,.29,0,.11,.03,0,0,0,.01,.7,0,0,0,0,.55,0,0,0,0,.04,0,.9,.11,0,.12,0,.97,0,0,.69,0,.01,.16,0,0,.04,.04,.01,.3,.01,.01,0,.09,.65,0,0,0,.28,0,0,0,0,0,0,.18,.9,.92,0,.43,0,.27,.03,.01,.1,0,0,.06,.63,0,0,.06,0,.18,0,0,0,.66,.66,.39,.01,0,0,0,0,0,.24,0,.04,0,.11,.02,.01,.5,0,.24,0,.02,0,0,.43,0,0,0,.07,.28,.82,0,.23,.01,.58,0,.48,0,.32,.34,.84,.03,0,0,.23,0,0,.04,0,.49,.01,0,.42,0,0,0,.05,.05,0,.05,0,0,.09,.71,0,0,0,0,0,.06,.88,0,0,0,.02,.07,.65,0,0,0,0,.05,0,0,0,0,0,0,0,.44,0,.57,.03,0,.01,.02,.06,0,0,0,0,0,0,0,0,.33,.21,.06,.38,.39,.2,0,.01,0,.01,0,.12,.03,.26,.5,.49,.48,.27,.45,0,.41,.01,0,.01,.13,0,.35,.01,.46,.56,0,.34,.67,0,0,0,.12,0,.31,0,.22,0,0,0,0,.79,0,.02,.71,.87,0,.02,.66,0,0,0,0,0,.45,0,0,.03,.02,.16,.22,0,0,.06,0,0,.05,0,.01,0,0,.1,.33,0,0,0,.73,.06,.03,.84,.06,.46,0,.41,.14,0,0,.07,0,.45,.16,.14,0,.01,0,.01,.05,.69,.64,0,.61,.21,.09,0,.73,0,0,0,.28,0,0,0,0,0,1,.42,0,0,.01,.16,.81,.15,.28,0,0,.26,0,.02,0,0,.88,.06,.27,.22,0,.9,.58,.04,0,0,0,0,0,.89,0,0,.07,0,.64,.06,0,0,0,.03,0,0,0,.01,0,0,0,0,.2,0,0,0,0,0,.26,0,.07,0,.04,.08,.03,0,0,0,0,0,0,.15,0,.39,0,0,0,0,0,0,0,.62,0,0,.14,0,0,.05,0,.95,.69,0,0,0,0,.04,.8,.82,.66,0,.03,0,0,0,.44,.07,.1,.51,.03,.45,0,0,.61,0,.03,.71,0];export{a as pvalData};
