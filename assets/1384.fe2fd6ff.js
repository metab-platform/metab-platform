const a=[.72,.41,.81,.31,.97,.58,.52,.13,.32,.32,.9,.3,.79,.87,.95,.22,.97,.85,.17,.2,.57,.26,.7,.76,.62,.69,.13,.04,.27,.12,.46,.09,.99,.84,.31,.12,.83,.63,.97,.99,.85,.58,.22,.69,.99,.84,.98,.38,.09,.77,.05,.17,.47,.91,.91,.35,.31,.77,.77,.5,.37,.65,.78,.95,.33,.55,.79,.63,.5,.36,.57,.61,.23,.45,.72,.94,.07,.2,.81,.3,.42,.24,.16,.98,.77,.25,.52,.51,.52,.18,.61,.78,.56,.39,.72,.52,.63,.2,.24,.25,.87,.5,.29,.51,.26,.01,.07,.45,.69,.27,.3,.21,.16,.95,.31,.79,.92,.3,.54,.23,.67,.29,.8,.41,.54,.24,.64,.85,.51,.85,.39,.36,.43,.32,.19,.36,.37,.99,.23,.69,.97,.79,.65,.42,.56,.84,.73,.33,.16,.62,.53,.06,.77,.01,.28,.2,.82,.33,.87,.81,.54,.4,.89,.47,.15,.08,.56,.24,.33,.86,.45,.34,.13,.06,.77,.15,.84,.05,.23,.86,.18,.77,.89,.95,.5,.87,.51,.54,.88,.52,.78,.12,.3,.45,.4,.91,.99,.12,.96,.1,.05,.35,.97,.5,.78,.64,.44,.35,.74,.37,.12,.94,.51,.66,.69,.16,.23,.25,.15,.28,.74,.51,.74,.86,.19,.87,.24,.21,.27,.85,.55,.53,.56,.72,.59,.47,1,.77,.13,.62,.31,.91,.63,.79,.51,.09,.27,.5,.87,.05,.14,.32,.83,.75,.78,.88,.91,.02,.53,.97,.81,.64,.03,.86,.54,.31,.79,.61,.29,.38,.22,.38,.86,.58,.68,.53,.33,.4,.59,.13,.44,.64,.07,.76,.79,.9,.39,.97,.17,.23,.5,.23,.54,.12,.62,.34,.48,.54,.24,.49,.13,.81,.09,.96,.8,.8,.61,.51,.72,.58,.68,.93,.78,.55,.85,.44,.28,.35,.72,.7,.98,.46,.96,.98,.6,.88,.5,.16,.86,.62,.34,.53,.46,.1,.08,0,.56,.51,.42,.22,.51,.44,.36,.21,.63,.94,.19,.26,.21,.5,.68,.55,.57,.56,.4,.27,.61,.81,.57,.91,.23,.71,.87,.81,.15,.99,.27,.88,.98,.05,.35,.98,.26,.56,.36,.37,.33,.38,.18,.67,.22,.23,.31,.47,.52,.05,.39,.29,.79,.74,.5,.26,.28,1,1,.94,.29,.21,.11,.85,.57,.13,.49,.52,.65,.86,.83,.9,.71,.57,.64,.89,.38,.32,.71,.1,.55,.48,.3,.91,.59,.97,.11,.57,.72,.91,.7,.69,.57,.45,.31,.74,.27,.8,.31,.66,.01,.63,.68,.8,.43,.44,.6,.73,.51,.23,.62,.73,.19,.66,.26,.45,.45,.95,.4,.79,.06,.88,.67,.82,.7,.52,.99,.12,.99,.56,.64,.39,.68,.86,.37,.92,.61,.83,.36,.61,.91,.09,.93,.43,.57,.79,.95,.22,.28,.25,.72,.48,.1,.59,.7,.29,.14,1,.83,.75,.2,.13,.32,.77,.38,.14,.28,.9,.48,.75,.17,.93,.3,.45,.34,.27,.42,.13,.68,.32,.37,.6,.13,.83,.78,1,.59,.5,.25,.6,.09,.55,.17,.51,.24,.12,.17,.52,.42,.19,.87,.66,.87,.1,.4,.29,.42,.17,.12,.67,.1,.13,.55,.69,.25,.87,.82,1,.62,.84,.44,.71,.26,.86,.92,.43,.17,.18,.63,.02,.11,.15,.32,.8,.75,.94,.06,.56,.45,.91,.28,.35,.07,0,.16,.64,.64,.15,.37,.99,.77,.91,.22,.68,.64,.68,.76,.38,.1,.56,.6,.73,.82,.63,.22,.5,.65,.09,1,.52,.6,.11,.51,.81,.01,.62,.66,.08,0,.92,.93,.06,.71,.19,.88,.02,.64,.6,.83,.63,.45,.55,.56,.17,.3,.36,.02,.03,.57,.35,.73,.52,.52,.68,.73,.72,.09,.04,.34,.62,.92,.53,.57,.3,.84,.46,.91,.63,.69,.16,.2,.39,.58,.46,.88,.4,.95,.58,.26,.51,.1,.5,.68,.67,.7,.93,0,.17,.52,.67,.79,.73,.32,.98,.07,.91,.22,.46,.83,.23,.05,.58,.96,.26,.22,.85,.85,.53,.83,.18,.32,.82,.74,.43,.92,.08,.34,.71,.54,.16,.98,.17,.37,.12,.54,.92,.56,.59,.28,.57,.59,.82,.96,.24,.26,.7,.89,.79,.31,.02,.84,.19,.7,.77,.46,.39,.8,.88,.45,.97,.85,.66,.06,0,.41,.92,.06,.16,.25,.92,.99,.75,.27,.33,.22,.13,.98,.07,.75,.36,.98,.9,.37,.64,.24,.2,.84,.06,.85,.75,.79,.02,.74,.2,1,.75,.88,.47,.37,.65,.21,.29,.79,.26,.99,.26,.62,.83,.68,.38,.58,.21,.9,.99,.14,.93,.82,.97,.68,.54,.58,.37,.99,.87,.29,.89,.29,.51,.97,.42,.35,.07,.56,0,0,1,.78,.62,.64,.83,.86,.15,.41,.76,.38,.49,.13,.93,.97,.67,.23,.95,.33,.05,.74,.84,.2,.49,.05,.18,.94,.59,.12,.3,.29,.51,.96,.94,0,.37,.46,.12,.68,.62,.07,.14,.49,.76,.64,0,.34,.17,.22,.13,.4,.79,.9,.26,.94,.32,.03,.37,.8,.22,.95,.56,.2,.42,.71,.54,.34,.94,.95,.64,.07,1,.14,.69,.98,.41,.77,.27,.74,.14,.93,.9,.64,.15,.4,.47,.94,.05,.78,.46,.87,.71,0,.4,.51,.75,.69,.5,.72,.54,.67,.06,.23,.02,.26,.96,.83,.64,.68,.9,.61,.37,.27,.03,.62,.83,.99,.7,.45,.53,.09,.7,.8,.45,1,.49,.37,.82,.45,.57,.58,.32,.8,.57,.45,.04,.22,.88,.22,.26,.48,.19,.81,.34,.96,.3,.93,.33,.61,.6,.75,.29,.19,.3,.6,.21,.94,.67,.87,.65,.28,.65,.85,.63,.72,.91,.22,1,.06,.75,.85,.37,.19,.32,.49,.53,.58,.29,.55,.22,.35,.15,.36,.08,.95,.94,.97,.54,.98,.12,.06,.19,.43,.21,.75,.69,.54,.46,.62,.95,.97,.66,.74,.09,.84,.95,.33,.38,.77,.53,.47,.15,.45,.76,.79,.57,.56,.93,.2,.77,.17,.1,.6,.92,.44,.86,.8,.1,.51,.2,.66,.51,.25,.56,.08,.33,.45,.73,.58,.94,.79,.96,.58,.89,.91,.82,.57,.49,.68,.8,.22,.27,.92,.91,.02,.23,.24,.16,.87,.6,.89,.55,.87,.72,.36,.72,.92,.85,.64,.84,.89,.14,.27,0,.24,.87,.79,.74,.39,.68,.81,.54,.53,.7,.56,.58,.12,.95,.97,.46,.12,.23,.57,.06,.57,.19,.48,.22,.37,.14,.96,.61,.06,0,.41,0,.85,.95,.37,.7,.68,.83,.52,.99,.08,.77,.83,.78,.39,.45,.47,.43,.69,.47,.47,.8,.81,.17,.66,.35,.96,.32,.8,.26,.64,.35,.99,.72,.95,.76,.61,.7,.71,.9,.92,.78,.43,.87,.74,.52,.29,.27,.14,.15,.59,.35,.66,.52,.52,.88,.26,.95,.68,.97,.89,.8,.73,.75,.46,.26,.44,.87,.22,.44,.3,.68,.49,.88,.35,.93,.25,.2,.77,.75,.73,.13,.74,.8,.32,.03,.12,.54,.87,.66,.86,.42,.66,.83,.3,.19,.79,.14,.86,.42,.35,.86,.65,.84,.39,.18,.56,.26,.39,.4,.61,.56,.04,.4,.88,.42,.47,.39,.92,.95,.76,.3,.82,.25,.67,.47,.88,.71,.86,.74,.52,.54,.98,.97,.52,.2,.99,.99,.25,.47,.45,.09,.15,.33,.4,.75,.44,.62,.13,.19,.23,.22,.43,.16,.14,.7,.92,.76,.77,.47,.72,.17,.1,.09,.52,.49,.69,.32,.88,.28,.65,.71,.93,.29,.1,.59,.35,.89,.53,.67,.36,.32,.99,.74,.46,.09,.68,.43,.23,.28,.11,.83,.21,.69,.85,.51,.6,.77,.58,.53,.97,.03,.41,.15,.81,.9,.31,.81,.99,.71,.33,.34,.93,.98,.73,.24,.15,.72,.4,.42,.48,.37,.21,.47,.32,.89,.21,.28,.71,.36,.49,.43,.67,.47,.4,.44,.32,.28,.34,.94,.16,.46,.48,.7,.81,.55,.71,.65,.48,.76,.54,.77,.07,.54,.02,.22,.02,.48,.58,.44,.45,.53,.53,.79,.86,.4,.57,.41,.5,0,.28,.16,.38,.43,.59,.72,.79,.61,.9,.54,.87,.43,.97,.88,.8,.92,.94,.03,.11,.46,.41,.72,.47,.19,.98,.45,.93,.63,.83,.54,.31,.9,.56,.95,.66,.35,.81,.65,.38,.61,.67,.47,.42,.54,.63,.93,.47,.39,.4,.12,.66,.5,.98,.58,.43,.69,.33,.78,.64,.31,.45,.82,.04,.3,.71,.79,.28,.95,.03,.3,.59,.57,.35,.27,.06,.9,.75,.47,.66,.15,.18,.69,.81,.24,.28,.57,.37,.67,.45,.23,.71,.33,.6,.73,.2,0,.95,.45,.01,0,.57,.84,.65,.99,.03,.33,.6,.13,.63,.88,.31,.68,.61,.74,.45,.04,.8,.27,.41,1,.39,.99,.89,.44,.12,.81,.19,.29,.71,.38,.83,.41,.62,.92,.22,.85,.34,.26,.63,.27,.32,.31,.81,.11,.17,.29,.88,.13,.39,.37,.6,.3,.25,.42,.2,.95,.86,.49,.6,.52,.87,.75,.86,.24,.66,.52,.71,.76,.61,.43,.61,.4,.79,.14,.42,.89,.81,.14,.84,.28,.56,.79,.3,.68,.71,.73,.75,.46,.23,.78,.45,.71,.24,.2,.28,.6,.57,.96,.39,.68,.17,.23,.85,.71,.83,.56,.48,.27,.19,.38,.06,.64,.23,.19,.1,.35,.09,.33,.63,.86,.9,.54,.43,.09,.65,.21,.16,.6,0,.15,.4,.21,.23,.44,.41,.68,.5,.75,.7,.5,.23,.15,.89,.79,.2,.48,.77,.9,.22,.63,.43,.75,.33,.61,.96,.46,.93,.68,.88,.28,.13,.38,.04,.08,.79,.94,.32,.63,.21,.84,.9,.22,.38,.09,.61,.27,.75,.44,.88,.89,.99,.06,.83,.79,.26,.5,.39,.56,.42,.66,.38,.05,.22,.63,.92,.41,.03,.99,.82,.19,.32,.28,.9,.64,.8,.05,.25,.32,.87,.28,.55,.78,.7,.88,.42,.92,.76,.83,.73,.96,.83,.76,.79,.06,.8,.44,.8,.52,.16,.32,.26,.83,.42,.8,.24,.47,.17,.44,.63,.77,.58,.61,.28,.59,.79,.25,.32,.73,.32,.85,.79,.64,.17,.34,.72,.5,.69,.18,.25,.49,.6,.24,.77,.71,.86,.74,.71,.32,.51,.73,.41,.94,.84,.61,.16,.4,.47,.87,.91,.36,.09,.9,.82,.66,.53,.63,0,.95,.77,.33,.41,.06,.2,.99,.31,.8,.7,.76,.31,.64,.2,.28,.84,.31,.94,.54,.51,.88,.06,.24,.3,.7,.24,.31,.58,.62,.69,.14,.44,.58,.42,.5,.39,.72,.43,.89,.43,.92,.79,.61,.44,.46,.41,.47,.99,.37,.89,.18,.89,.37,.9,.68,.38,.18,.36,.59,.39,.45,.18,.43,.75,.51,.52,.47,.34,.36,.53,.55,0,.46,.91,.07,.67,.65,.22,.23,.59,.51,.6,.39,.16,.77,.7,.5,.53,.26,.53,.75,.39,.14,.41,.61,.43,.47,.49,.25,.98,.57,.93,.97,.4,.4,.5,.91,.06,.23,.75,.7,.42,.2,.62,.59,.78,.71,0,.12,.96,.22,.16,.34,.62,.24,.82,.93,.86,.59,.72,.95,.63,.22,.8,.53,.2,.65,.98,.27,.08,.23,.76,.14,.91,.22,0,.92,.68,.15,.35,.97,.01,.42,.73,.64,.7,.55,.64,.43,.63,.18,.88,.51,.47,.34,.92,.19,.23,.23,.93,.73,.57,.13,.74,1,.47,.73,.5,.26,.24,.88,.58,.89,.35,.33,.75,.72,.46,.91,.48,.48,.68,.6,.95,.08,.91,.82,.85,.44,.21,.06,.04,.99,.82,.1,.54,.16,.67,.16,.06,.86,.77,.49,.21,.92,.74,.16,.22,.72,.55,.11,.69,.74,.17,.76,.48,.01,.97,.82,.85,.88,.62,.35,.61,.92,.4,.93,.38,.64,.87,.52,.08,.8,.66,1,.1,.94,.27,.32,0,.75,.81,.39,.84,.41,.23,.4,.57,.61,.39,.88,.49,.47,.27,.18,.28,.01,.45,.42,.92,.63,.11,.08,.74,.91,.06,.02,.97,.5,.13,.06,.38,.53,.55,.25,.28,.83,.39,.84,.66,.15];export{a as pvalData};
