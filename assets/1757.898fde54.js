const a=[.21,.05,.23,.9,.29,.8,.49,.99,.45,.86,.43,.54,.49,.7,.96,.62,.31,.85,.84,.01,.78,.72,.26,.91,.88,.65,.75,.04,.18,.48,.52,.94,.3,.96,.11,.73,.46,.73,.8,.54,.33,.87,.03,.98,.83,.59,.17,.53,.41,.35,.4,.98,.35,.64,.61,.22,.94,.86,.98,.29,.34,.81,.69,.46,.74,.52,.43,.47,.76,.17,.87,.84,.44,.02,.87,.42,.74,.45,.29,.09,.14,.19,0,.7,.73,.26,.8,.44,.34,.84,.68,.45,.75,.25,.27,.2,.37,.54,.43,.31,.42,.79,.86,.27,.78,.24,.14,.19,.35,.53,.11,.61,.73,.03,.33,.83,.06,.29,.09,.92,.78,.82,.34,.4,.58,.88,.97,.59,.15,.41,.79,.83,0,.47,.88,.92,.65,.37,.35,.57,.24,.48,.64,.7,.87,.21,.68,.02,.54,.04,.56,.3,.48,.4,.89,.13,.45,.89,.38,.62,.38,.51,.14,.25,.9,.62,.6,.32,.15,.76,.7,.25,.51,.62,.18,.12,.17,.64,.44,.26,.56,.9,.01,.94,.86,.64,.86,.63,.06,.38,.36,.48,.57,.61,.3,.08,.15,.65,.01,.89,.05,.53,.3,.56,.45,.14,.98,.77,.19,.33,.87,.89,.4,.96,.94,.09,.55,.26,.19,.19,.57,.42,.8,.5,.41,.42,.71,.13,.84,.64,0,.18,.61,.62,.87,.71,.58,.07,.14,.58,.88,.85,.89,.71,.56,.81,.35,.89,.32,.18,.5,.57,.87,.09,.22,.96,.17,.25,.23,.76,.62,.93,.66,.2,.2,.62,.14,.57,.47,.15,.88,.03,.4,.54,.84,.11,.71,.86,.43,.6,.53,.23,.33,.3,.61,.23,.44,.47,.62,.46,.65,.88,.12,.84,.89,.01,.6,.35,.83,.95,.41,.16,.9,0,.17,.81,.38,.7,.23,.36,.31,.47,.88,.93,.14,.97,.39,.63,.5,.35,.94,.76,.57,.61,.86,.89,.24,.21,.6,.83,.92,.82,.49,.92,.41,.09,.27,.98,.86,.45,.6,.01,.91,.98,.94,.59,.45,.42,.02,.57,.44,.39,.21,.74,.01,.46,.49,.01,.63,.87,.07,.45,.68,.18,.29,.16,.72,.38,.04,.85,.18,.36,.11,.59,.2,.7,.57,.66,.09,.75,.05,.55,.95,.42,.9,.59,0,.04,.49,.35,.58,.6,.46,.64,.63,.13,.96,.76,.28,.5,.72,.97,.29,.35,.73,.03,.53,.28,.66,.37,.67,.53,.68,.63,.8,.62,.23,.16,.7,.99,.63,.31,.1,.83,.62,.43,.19,.79,.25,.83,.73,.62,.78,1,.79,.64,.29,.11,.19,.5,.28,.98,.84,.02,.55,.04,.13,.14,.01,.33,.16,.63,.33,.98,.29,.21,.58,.45,.53,.88,.52,.16,.4,.77,.53,.4,.17,.28,.14,.71,.19,.31,.62,.25,.4,.17,.15,.47,.15,.33,.24,.86,.12,.9,.16,.73,.15,.14,.29,.78,.11,.54,.21,.46,.14,.24,.43,0,.54,.87,.89,.24,.61,.55,1,.72,.02,.29,.19,.15,.19,.8,.73,.78,.24,.18,.52,.75,.94,.65,0,.07,.01,.43,.16,.53,.62,.82,.93,.16,.65,.47,.31,.44,.77,.97,.41,.06,.1,.41,.76,.69,.63,.49,.01,.83,.41,.72,.08,.42,.47,.55,.2,.89,.84,.41,.56,.43,.52,.53,.84,.37,.44,.97,0,0,.59,.04,.61,.05,.53,.77,.09,.47,.16,.37,.61,.96,.94,.9,.04,.88,.3,.58,.84,.8,.1,.75,.27,.67,0,.35,.58,.5,.94,.28,.18,.44,.45,.63,.16,.99,.21,.65,.12,.75,.5,.15,.98,.96,.81,.5,.57,.38,.11,.98,.12,.8,.45,.82,.7,.63,.15,.4,.42,.59,.87,.11,.25,.46,.11,.12,.53,.86,.39,.89,.19,.5,.81,.5,.35,.29,.23,.04,.94,.5,.22,.59,.43,.68,.46,.31,.77,.15,.12,.86,.21,.65,.42,0,.14,.02,.38,.56,.94,.29,0,.82,.96,.72,.12,.92,.02,.69,.82,.67,.43,.83,.73,.49,.27,.26,.34,.56,.35,.16,.11,.98,.32,.63,.57,.46,.14,.69,.66,.17,.63,.84,.03,.75,.76,.74,.83,.08,.18,.89,.76,.18,.15,.89,.18,.85,.89,.32,.66,.21,.27,.38,.08,.5,.55,.28,.55,.29,.25,.02,.51,.72,.47,.35,.42,.9,.37,.02,.86,.63,.4,.18,.05,.66,.86,0,.44,.81,0,.29,.08,.64,.54,.39,.48,.14,.5,.96,.85,.3,.24,.6,.25,.78,.05,.34,.2,.97,.15,.89,.21,.28,.01,.81,.08,.27,.39,.85,.52,.18,.6,.74,.12,.84,.3,.42,.39,.25,.63,.22,.99,.51,.15,.64,.4,.84,.27,.25,.25,.27,.2,.96,.7,.42,.11,.58,.58,.2,1,.52,.54,.01,.7,.83,.45,.56,.35,.29,.74,.2,.19,.52,.85,.16,.64,.06,.93,.29,.77,.26,.22,.41,.76,.42,.43,.37,.76,.6,.14,.19,.38,.45,.47,.71,.04,.28,.86,.85,.5,.37,.16,.4,.52,.85,.19,.3,.39,.93,.04,.77,.57,.84,.89,.21,.8,.54,.28,.9,.32,.58,.33,.97,.99,.65,.55,.83,.33,.61,.07,.84,.24,.66,.63,.53,.55,.24,.2,.51,.52,.01,.24,.78,.09,.73,.59,.97,.65,.85,.31,.92,.05,.14,.17,.35,.37,.05,.93,1,.74,.41,.06,.56,.76,.64,.65,.82,.09,.12,.62,0,.48,.17,.85,.41,.06,.42,.91,.64,.06,.32,.28,.3,.34,.95,.33,.48,.25,.62,.58,.36,.95,.66,.95,.21,.4,.48,.12,.72,.34,.05,.81,.18,.1,.16,.78,.02,.96,.26,.41,0,.18,.06,.77,.02,.29,.78,.83,.38,.32,.97,.1,.2,.79,.62,.39,.09,.97,.25,.78,.66,.87,.32,.36,.12,.35,.95,.57,.71,.09,.9,.98,.85,.87,.92,.4,.88,.77,.83,0,.76,.38,.83,.3,.89,.66,.74,.21,.65,.85,0,.32,.85,.35,.97,.85,.67,.2,.81,.42,.89,.17,.6,.27,.34,.93,.02,.94,.95,.79,.48,.38,.07,.82,.17,.97,.71,.02,.56,.14,.65,.42,.61,.1,.83,.75,.28,.31,.82,.52,.49,.76,.37,.01,.05,.83,.25,.98,.44,.72,.53,.78,.54,.05,.31,.21,.92,.6,.43,.75,.49,.26,.3,.83,.13,.83,.23,.3,.2,.86,.42,.71,.84,.26,.75,.74,.2,.03,.19,.64,.35,0,.81,.57,.74,.73,.88,.34,.33,.93,.59,.91,.89,.08,.13,.96,.91,.44,.1,.08,.36,.05,.66,.05,.55,.86,.39,.45,.73,.22,.84,.67,.61,.81,.22,.25,.94,.32,.57,.82,.8,.25,.69,.95,.03,.54,.58,.29,.95,.83,.33,.34,.28,.86,.32,.28,.19,.08,.28,.27,.9,.25,.55,.93,.2,.75,.82,.82,.17,.26,.9,.99,.5,.57,.56,.69,.49,.82,.99,.21,.52,.11,.93,.54,.81,.31,.77,.38,.98,.73,.1,.64,.47,.05,0,.99,.72,.96,.27,.08,.42,.43,.43,.4,.92,.86,.49,.33,.97,.06,.17,.52,.26,.11,.19,.01,.5,.67,.23,.87,.35,.16,.66,.52,.75,.1,.32,.69,.15,.42,.2,.05,.5,.97,.08,.01,.99,.92,.77,.87,.66,.75,.46,.39,.77,.73,.29,.38,.62,.33,.15,.63,.53,.8,.84,.39,.35,.34,.47,.61,.35,.49,.52,.22,.77,.22,.89,.67,.7,.91,.01,.34,.94,.83,.32,.3,.06,.01,.72,.27,.91,.95,.3,.59,.6,.76,.76,.38,.92,.96,.9,.05,.23,.33,.08,.67,.57,.93,.49,.83,1,.16,.47,.03,.13,.94,.69,.64,.3,.65,.81,.61,.22,.37,.79,.28,.84,.02,.74,.87,.94,.94,.65,.46,.67,.93,.32,.32,.79,.52,.02,.86,.84,.45,.68,.69,.9,.52,.59,.71,.11,.69,.73,.8,.27,0,.12,.9,.61,.88,.83,.69,.85,.52,.39,.4,.3,.01,.66,.49,.14,.51,.55,.74,.4,.84,.51,.41,.71,.08,.84,.89,.89,.05,.98,.41,.4,.31,.4,.58,.66,.6,.98,.16,.89,.24,.21,.74,.75,.74,.41,.52,.73,.74,.84,0,.32,.17,.84,.42,.34,.44,0,.57,.51,.53,.39,.98,.73,.34,.02,.99,.05,.06,.22,.26,.22,.47,.83,.78,.49,.16,.59,.11,.77,.22,.55,.89,.76,.46,.69,.83,.73,.25,.43,.48,.64,0,.5,.89,0,.19,0,.49,.71,.2,.35,.81,.67,.68,.85,.51,.58,.32,.32,.79,.89,.37,.75,.61,.93,.99,.99,.5,.18,.53,.36,.75,.88,.93,.92,.55,.75,.82,.46,.91,.59,.98,.54,.39,.46,.92,.27,.32,.68,.57,.01,.69,.5,.91,.78,.37,.44,.89,.05,.37,.55,.03,.78,.95,.85,.9,.23,.23,.79,.75,.36,.24,.45,.5,.84,0,.27,.65,.64,.81,.07,.66,.29,.7,.29,.56,.52,.8,.41,.57,.54,.7,.81,.34,.29,.87,.89,.25,.79,.96,.95,.52,.24,.06,.33,.51,.82,.69,.25,.11,.96,.84,.95,.25,0,.81,.52,.29,.14,.25,.71,.71,.28,.43,.35,.59,.03,.9,.17,.88,.81,.63,.68,.96,.92,.58,.29,.02,.88,.22,.42,.85,.17,.72,.45,.37,.39,.65,.22,.38,.74,.83,.48,.7,.11,.72,.18,.64,.63,.17,.79,.65,.72,.5,.5,.23,.61,.47,.57,.91,.26,.11,.44,.01,.6,.21,.84,0,.79,.13,.53,.36,.37,.46,.67,0,.23,.73,.8,.95,.4,.06,0,.65,.35,.62,.57,.62,.56,.65,.58,0,.53,.01,.6,0,.11,0,.33,.39,.02,.82,.62,.64,0,.87,.51,.74,.16,.76,.8,.16,.01,.93,.9,.26,.2,.14,.66,.7,.52,.03,.83,.22,.97,.92,.34,.61,.32,.68,.22,.08,.25,.31,.52,.81,.25,.96,.91,.66,.83,.02,.47,.67,0,.77,0,.5,.4,.46,.3,.62,.56,.84,.07,0,.49,.52,.95,.68,.45,.12,.49,.21,1,.25,.37,.49,.6,.72,.51,.34,.89,.2,0,.28,.11,.78,.18,.66,.6,.26,.26,.24,.12,.23,.96,.89,.89,.45,.29,.59,.79,.21,.34,.44,.22,.25,0,.09,.94,.14,.3,.82,.21,.34,.76,.89,.11,.8,.43,.25,.6,.4,0,.92,.77,.3,.35,.65,.88,.88,.48,.5,.78,0,.71,.93,.43,.84,.76,.88,.49,.16,.14,.83,.83,.97,.76,.24,.42,.23,.67,.39,.7,.64,.45,0,.07,.25,.35,.15,.21,.91,0,.59,.53,.83,.91,.2,.22,.52,.86,.9,.76,.94,.82,.15,.41,.75,.1,.17,.87,.97,.17,.45,.84,.92,.16,.59,.83,.46,.58,.03,.26,.45,.75,.73,.28,.54,.34,.2,.15,.5,.67,.47,.76,.07,.86,.42,.68,.67,.45,.75,.93,.98,.61,.22,.5,.34,.07,.04,.15,.29,.56,.3,.99,.29,.35,.45,0,.59,.17,.65,.48,.96,.33,.83,.7,.35,.73,.87,.49,.85,.58,.24,.04,.87,.1,.55,0,.39,.92,.56,.55,.78,.55,.03,.19,.13,.6,.33,.98,.91,.43,.05,.07,.17,.73,.8,.28,.52,.56,0,.72,.59,.39,.89,.98,.47,.61,.98,.82,.17,.99,.62,.43,.36,.33,.45,.99,.68,.53,.92,.24,.47,.36,0,0,.87,.22,.83,.92,.08,.32,.75,.69,.33,.9,.82,.44,.61,.55,.7,.04,.9,.38,.68,.02,.4,.11,.47,.01,.58,.84,.13,.71,.17,.6,.13,.63,.47,.42,.05,.32,.15,.09,.98,.24,.42,.92,.08,.67,.3,.21,.88,.29,.3,.24,.78,.18,.95,.16,.18,.13,.32,.94,.83,.47,.76,.26,.91,.06,.19,.67,.38,.39,.03,.75,.91,.58,.44,.3,.71,.49,.89,.09,.68,.35,.7,.05,.16,.72,.76,.41,.23,.32,.49,.6,.28,.88,.66,.41,.86,.78,.02,.36,.86,.84,.29,.58,.67,.67,.2,.7,.74,.4,.64,.21,.08,.49,.8,.12,.78,.84,.32,.48,.93,.76,.49,.91,.21,.46,.44,.37,.07,.96,.34,.15,.57,.95,.84,.03,.6,.28,.01,.57,.08,.9,.79,.83];export{a as pvalData};
